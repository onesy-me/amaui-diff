import { is, merge, stringify } from '@amaui/utils';

export type IDiffItemAction = 'add' | 'a' | 'remove' | 'r';

export type IDiffItem = [IDiffItemAction, number, string?];

export interface IDiff {
  items: Array<IDiffItemAction | number | string>;
}

export interface IInit {
  method?: (value: any) => string;
}

export interface IItemize {
  method?: (value: string) => Array<string>;
}

export interface IEqual {
  method: (value: string, value1: string) => boolean;
}

export interface IJoin {
  method?: (value: Array<string>) => string;
}

export type IDiffMatrixItem = [number?, number?, number?];

export interface IOutput {
  compressed?: boolean;
}

export interface IOptions {
  init?: IInit;
  itemize?: IItemize;
  equal?: IEqual;
  join?: IJoin;
  output?: IOutput;
}

export type TDiffVariants = 'default' | 'word' | 'line' | 'sentence' | 'json';

export type IOPTIONS = {
  [p in TDiffVariants]?: IOptions;
};

const OPTIONS = {
  default: {
    init: { method: (value: any): string => String(value) },
    itemize: { method: (value: string): Array<string> => value.split('').filter(Boolean) },
    join: { method: (value: Array<string>): string => value.join('') },
    equal: { method: (value: string, value1: string): boolean => value === value1 },
  },
  word: {
    init: { method: (value: any): string => String(value) },
    itemize: { method: (value: string): Array<string> => value.split(/\s|\b/).filter(Boolean) },
    join: { method: (value: Array<string>): string => value.join(' ') },
  },
  line: {
    init: { method: (value: any): string => String(value) },
    itemize: {
      method: (value: string): Array<string> => {
        const values = value.split(/(\n|\r\n)/);

        const newValues = [];

        for (let i = 0; i < values.length; i++) {
          if (i % 2) newValues[newValues.length - 1] += values[i];
          else newValues.push(values[i]);
        }

        return newValues;
      },
    },
    join: { method: (value: Array<string>): string => value.join('') },
  },
  sentence: {
    init: { method: (value: any): string => String(value) },
    itemize: { method: (value: string): Array<string> => value.split(/(\S.*?[.!?])(?=\s +|$)/).filter(Boolean) },
    join: { method: (value: Array<string>): string => value.join('') },
  },
};

export const optionsDefault: IOptions = {
  ...OPTIONS.default,
  output: {
    compressed: true
  }
};

class AmauiDiff {
  public options: IOptions;

  public static get amauidiff(): AmauiDiff { return new AmauiDiff(); }

  public static get word(): AmauiDiff { return new AmauiDiff(AmauiDiff.OPTIONS.word); }

  public static get line(): AmauiDiff { return new AmauiDiff(AmauiDiff.OPTIONS.line); }

  public static get sentence(): AmauiDiff { return new AmauiDiff(AmauiDiff.OPTIONS.sentence); }

  public static get json(): AmauiDiff {
    const options = AmauiDiff.OPTIONS.line;

    options.init.method = (value: any): string => stringify(value);

    return new AmauiDiff(options);
  }

  public static get OPTIONS(): IOPTIONS {
    return OPTIONS;
  }

  public static updateGroups(diff: IDiff): any[] {
    const updateGroups = [];

    let previousGroup = [];
    let lastGroupIsRemove = false;

    const items = [];

    for (let i = 0; i < diff.items.length;) {
      if (['r', 'remove'].indexOf(diff.items[i] as string) > -1) {
        items.push(diff.items.slice(i, i + 2));

        i += 2;
      }
      else {
        items.push(diff.items.slice(i, i + 3));

        i += 3;
      }
    }

    diff.items = items;

    diff.items.forEach((item, index) => {
      const itemFollowing = diff.items[index + 1];

      const action = item[0];
      const actionFollow = itemFollowing && itemFollowing[0];

      if (['r', 'remove'].indexOf(action) > -1 && ['r', 'remove'].indexOf(actionFollow) > -1 && !lastGroupIsRemove) {
        if (previousGroup.length) updateGroups.push(previousGroup);

        lastGroupIsRemove = true;
        previousGroup = [];
      }

      if (['a', 'add'].indexOf(action) > -1 && lastGroupIsRemove) {
        if (previousGroup.length) updateGroups.push(previousGroup);

        lastGroupIsRemove = false;
        previousGroup = [];
      }

      previousGroup.push(item);
    });

    if (previousGroup.length) updateGroups.push(previousGroup);

    return updateGroups;
  }

  public constructor(options: IOptions = optionsDefault) {
    this.options = merge(options, optionsDefault);
  }

  public diff(value_: any, value1_: any, options_: IOptions = {}): IDiff {
    const options = merge(options_, this.options);

    const value = options.init.method(value_);
    const value1 = options.init.method(value1_);

    if (is('string', value) && is('string', value1)) {
      const valueArrayi = options.itemize.method(value1);
      const valueArrayj = options.itemize.method(value);

      const lengthi = valueArrayi.length;
      const lengthj = valueArrayj.length;

      const lengthMax = Math.max(lengthi, lengthj);

      const matrix: Array<Array<IDiffMatrixItem>> = [];
      const lcs = [];

      const findItem = (item: IDiffMatrixItem): IDiffMatrixItem => {
        if (item) {
          let [i, j] = item.slice(1) as [number, number];
          let left = (matrix[i] && matrix[i][j - 1]) as unknown as IDiffMatrixItem;
          let top = (matrix[i - 1] && matrix[i - 1][j]) as unknown as IDiffMatrixItem;
          let topLeft = (matrix[i - 1] && matrix[i - 1][j - 1]) as unknown as IDiffMatrixItem;

          if (
            (left && top) &&
            (left[0] !== item[0] && top[0] !== item[0])
          ) {
            // Enter the new upper left matrix part
            [i, j] = topLeft.slice(1) as [number, number];
          }

          let item_: IDiffMatrixItem;

          while (!item_) {
            left = (matrix[i] && matrix[i][j - 1]) as unknown as IDiffMatrixItem;
            top = (matrix[i - 1] && matrix[i - 1][j]) as unknown as IDiffMatrixItem;
            topLeft = (matrix[i - 1] && matrix[i - 1][j - 1]) as unknown as IDiffMatrixItem;

            if (left && (left[0] === matrix[i][j][0])) {
              [i, j] = left.slice(1) as [number, number];
            }
            else if (top && (top[0] === matrix[i][j][0])) {
              [i, j] = top.slice(1) as [number, number];
            }
            else {
              item_ = matrix[i][j];

              break;
            }
          }

          return item_;
        }
      };

      const addItem = (i: number, j: number): IDiffMatrixItem => {
        const left = (matrix[i] && matrix[i][j - 1]) as unknown as IDiffMatrixItem;
        const top = (matrix[i - 1] && matrix[i - 1][j]) as unknown as IDiffMatrixItem;
        const topLeft = (matrix[i - 1] && matrix[i - 1][j - 1]) as unknown as IDiffMatrixItem;

        const match = options.equal.method(valueArrayi[i], valueArrayj[j]);

        let item = 0;

        if (match) item = (topLeft ? topLeft[0] : 0) + 1;
        else item = Math.max((top ? top[0] : 0), (left ? left[0] : 0));

        const item_: IDiffMatrixItem = [item, i, j];

        return item_;
      };

      // Make a matrix
      for (let i = 0; i < lengthi; i++) {
        matrix.push([]);

        for (let j = 0; j < lengthj; j++) {
          matrix[i][j] = addItem(i, j);
        }
      }

      // Make a lcs
      const matrixItem = matrix[lengthi - 1][lengthj - 1];

      if (matrixItem && matrixItem[0]) {
        let item = matrixItem;

        let i = lengthi - 1;
        let j = lengthj - 1;

        const left = (matrix[i] && matrix[i][j - 1]) as unknown as IDiffMatrixItem;
        const top = (matrix[i - 1] && matrix[i - 1][j]) as unknown as IDiffMatrixItem;
        const topLeft = (matrix[i - 1] && matrix[i - 1][j - 1]) as unknown as IDiffMatrixItem;

        if (
          (left && top) &&
          (left[0] !== item[0] && top[0] !== item[0])
        ) {
          lcs.push(item);

          // Enter the new upper left matrix part
          [i, j] = topLeft.slice(1) as [number, number];
        }

        while (item && (item[1] !== 0 && item[2] !== 0)) {
          item = findItem(item) as any;

          lcs.push(item);
        }
      }

      // Sort based on value lcs
      lcs.sort((a, b) => a[0] - b[0]);

      // Make a diff items
      const diff = {
        items: [],
      };

      for (let i = 0; i < lengthMax; i++) {
        const iItem = lcs.find(item => item[1] === i);
        const jItem = lcs.find(item => item[2] === i);

        if (!jItem && i < lengthj) diff.items.push(this.action('remove', i, undefined, options));
        if (!iItem && i < lengthi) diff.items.push(this.action('add', i, valueArrayi[i], options));
      }

      function sortMethod(a: IDiffItem, b: IDiffItem) {
        if (a[0] < b[0]) return 1;

        if (a[0] > b[0]) return -1;

        return 0;
      }

      diff.items.sort(sortMethod);

      diff.items = diff.items.flat();

      return diff;
    }
  }

  public update(value__: any, diff: IDiff, options_: IOptions = {}): string {
    const options = merge(options_, this.options);

    const value_ = options.init.method(value__);

    if (is('string', value_) && diff !== undefined) {
      const value = options.itemize.method(value_);

      if (diff.items?.length) {
        const updateGroups = AmauiDiff.updateGroups(diff);

        updateGroups.forEach(group => {
          const removeGroup = group.every((item: IDiffItem) => ['r', 'remove'].indexOf(item[0]) > -1);

          if (removeGroup) {
            group.sort((a: any, b: any) => b[1] - a[1]);

            group.forEach((item: IDiffItem) => value.splice(item[1], 1));
          }
          else {
            group.forEach((item: IDiffItem) => {
              const action = item[0];
              const index = item[1];
              const valueItem = item[2];

              switch (action) {
                case 'a':
                case 'add':
                  value.splice(index, 0, valueItem);

                  break;

                case 'r':
                case 'remove':
                  value.splice(index, 1);

                  break;

                default:
                  break;
              }
            });
          }
        });
      }

      return options.join.method(value);
    }
  }

  private action(action: IDiffItemAction, index: number, value: string, options: IOptions): IDiffItem {
    const compressed = options.output?.compressed;

    return [compressed ? action.charAt(0) : action, index, value].filter(item => item !== undefined) as IDiffItem;
  }
}

export default AmauiDiff;
