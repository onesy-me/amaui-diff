/* tslint:disable: no-shadowed-variable */
import * as AmauiUtils from '@amaui/utils';

import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import AmauiDiff from '../src';

group('@amaui/diff', () => {

  group('AmauiDiff', () => {

    to('amauidiff', async () => {
      const values_ = [
        AmauiDiff.amauidiff instanceof AmauiDiff,
        AmauiDiff.amauidiff.options.init === AmauiDiff.OPTIONS.default.init,
        AmauiDiff.amauidiff.options.itemize === AmauiDiff.OPTIONS.default.itemize,
        AmauiDiff.amauidiff.options.join === AmauiDiff.OPTIONS.default.join,
        AmauiDiff.amauidiff.options.equal === AmauiDiff.OPTIONS.default.equal,
        AmauiDiff.amauidiff.update('aaa', AmauiDiff.amauidiff.diff('aaa', 'aab')) === 'aab',
        AmauiDiff.amauidiff.update('aau', AmauiDiff.amauidiff.diff('aau', 'aay ay')) === 'aay ay',
        AmauiDiff.amauidiff.update('abcdefk', AmauiDiff.amauidiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
        AmauiDiff.amauidiff.update('aaa', AmauiDiff.amauidiff.diff('aaa', 'd')) === 'd',
        AmauiDiff.amauidiff.update('aaa4aa', AmauiDiff.amauidiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
        AmauiDiff.amauidiff.update('aaba', AmauiDiff.amauidiff.diff('aaba', 'adaab')) === 'adaab',
        AmauiDiff.amauidiff.update('aba', AmauiDiff.amauidiff.diff('aba', 'aa')) === 'aa',
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [
          window.AmauiDiff.amauidiff instanceof window.AmauiDiff,
          window.AmauiDiff.amauidiff.options.init === window.AmauiDiff.OPTIONS.default.init,
          window.AmauiDiff.amauidiff.options.itemize === window.AmauiDiff.OPTIONS.default.itemize,
          window.AmauiDiff.amauidiff.options.join === window.AmauiDiff.OPTIONS.default.join,
          window.AmauiDiff.amauidiff.options.equal === window.AmauiDiff.OPTIONS.default.equal,
          window.AmauiDiff.amauidiff.update('aaa', window.AmauiDiff.amauidiff.diff('aaa', 'aab')) === 'aab',
          window.AmauiDiff.amauidiff.update('aau', window.AmauiDiff.amauidiff.diff('aau', 'aay ay')) === 'aay ay',
          window.AmauiDiff.amauidiff.update('abcdefk', window.AmauiDiff.amauidiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
          window.AmauiDiff.amauidiff.update('aaa', window.AmauiDiff.amauidiff.diff('aaa', 'd')) === 'd',
          window.AmauiDiff.amauidiff.update('aaa4aa', window.AmauiDiff.amauidiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
          window.AmauiDiff.amauidiff.update('aaba', window.AmauiDiff.amauidiff.diff('aaba', 'adaab')) === 'adaab',
          window.AmauiDiff.amauidiff.update('aba', window.AmauiDiff.amauidiff.diff('aba', 'aa')) === 'aa',
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(12).fill(true)));
    });

    to('word', async () => {
      const values_ = [
        AmauiDiff.word instanceof AmauiDiff,
        AmauiDiff.word.options.init === AmauiDiff.OPTIONS.word.init,
        AmauiDiff.word.options.itemize === AmauiDiff.OPTIONS.word.itemize,
        AmauiDiff.word.options.join === AmauiDiff.OPTIONS.word.join,
        AmauiDiff.word.update('aaaa aaaa aaaa', AmauiDiff.word.diff('aaaa aaaa aaaa', 'auaa aaaa ayaa')) === 'auaa aaaa ayaa',
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [
          window.AmauiDiff.word instanceof window.AmauiDiff,
          window.AmauiDiff.word.options.init === window.AmauiDiff.OPTIONS.word.init,
          window.AmauiDiff.word.options.itemize === window.AmauiDiff.OPTIONS.word.itemize,
          window.AmauiDiff.word.options.join === window.AmauiDiff.OPTIONS.word.join,
          window.AmauiDiff.word.update('aaaa aaaa aaaa', window.AmauiDiff.word.diff('aaaa aaaa aaaa', 'auaa aaaa ayaa')) === 'auaa aaaa ayaa',
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(5).fill(true)));
    });

    to('line', async () => {
      const value = `*/
public static ImageIcon getImageIcon(String path)
{
   java.net.URL imgURL = GuiImporter.class.getResource(path);

   if (imgURL != null)
   {
      return new ImageIcon(imgURL);
   }
   else
   {
      log.error('Couldn't find icon: ' + imgURL);
   }

   return null;
}

/**`;
      const value1 = `*/
public static ImageIcon getImageIcon(String path)
{
   if (path === null)
   {
      log.error('Icon path is null');
      return null;
   }

   java.net.URL imgURL = GuiImporter.class.getResource(path);

   if (imgURL != null)
   {
      log.error('Couldn't find icon: ' + imgURL);
      return null;
   }
   else

   return new ImageIcon(imgURL);
}

// /**`;

      const values_ = [
        AmauiDiff.line instanceof AmauiDiff,
        AmauiDiff.line.options.init === AmauiDiff.OPTIONS.line.init,
        AmauiDiff.line.options.itemize === AmauiDiff.OPTIONS.line.itemize,
        AmauiDiff.line.options.join === AmauiDiff.OPTIONS.line.join,
        AmauiDiff.line.update(value, AmauiDiff.line.diff(value, value1)) === value1,
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const value = `*/
public static ImageIcon getImageIcon(String path)
{
   java.net.URL imgURL = GuiImporter.class.getResource(path);

   if (imgURL != null)
   {
      return new ImageIcon(imgURL);
   }
   else
   {
      log.error('Couldn't find icon: ' + imgURL);
   }

   return null;
}

/**`;
        const value1 = `*/
public static ImageIcon getImageIcon(String path)
{
   if (path === null)
   {
      log.error('Icon path is null');
      return null;
   }

   java.net.URL imgURL = GuiImporter.class.getResource(path);

   if (imgURL != null)
   {
      log.error('Couldn't find icon: ' + imgURL);
      return null;
   }
   else

   return new ImageIcon(imgURL);
}

// /**`;

        const values_ = [
          window.AmauiDiff.line instanceof window.AmauiDiff,
          window.AmauiDiff.line.options.init === window.AmauiDiff.OPTIONS.line.init,
          window.AmauiDiff.line.options.itemize === window.AmauiDiff.OPTIONS.line.itemize,
          window.AmauiDiff.line.options.join === window.AmauiDiff.OPTIONS.line.join,
          window.AmauiDiff.line.update(value, window.AmauiDiff.line.diff(value, value1)) === value1,
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(5).fill(true)));
    });

    to('sentence', async () => {
      const value = 'Lorem u ipsum dolor sit amet, consectetur adipiscing elit. Fuscem dolor em, facilisis sed eratr sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus mmalesuad. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestassed maurelit, eratr sit molestie nisi semper at. Cras interdum massa nec mmolestierutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.';
      const value1 = 'Lorem u ipsum dolor sit amet, consectetur adipiscing elit. Fuscem dolor em, facilisis sed eratr sit amet, pharetra blandit augue. Aed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus mmalesuad. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestassed maurelit, eratr sit molestie nisi semper at. A.';

      const values_ = [
        AmauiDiff.sentence instanceof AmauiDiff,
        AmauiDiff.sentence.options.init === AmauiDiff.OPTIONS.sentence.init,
        AmauiDiff.sentence.options.itemize === AmauiDiff.OPTIONS.sentence.itemize,
        AmauiDiff.sentence.options.join === AmauiDiff.OPTIONS.sentence.join,
        AmauiDiff.sentence.update(value, AmauiDiff.sentence.diff(value, value1)) === value1,
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const value = 'Lorem u ipsum dolor sit amet, consectetur adipiscing elit. Fuscem dolor em, facilisis sed eratr sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus mmalesuad. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestassed maurelit, eratr sit molestie nisi semper at. Cras interdum massa nec mmolestierutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.';
        const value1 = 'Lorem u ipsum dolor sit amet, consectetur adipiscing elit. Fuscem dolor em, facilisis sed eratr sit amet, pharetra blandit augue. Aed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus mmalesuad. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestassed maurelit, eratr sit molestie nisi semper at. A.';

        const values_ = [
          window.AmauiDiff.sentence instanceof window.AmauiDiff,
          window.AmauiDiff.sentence.options.init === window.AmauiDiff.OPTIONS.sentence.init,
          window.AmauiDiff.sentence.options.itemize === window.AmauiDiff.OPTIONS.sentence.itemize,
          window.AmauiDiff.sentence.options.join === window.AmauiDiff.OPTIONS.sentence.join,
          window.AmauiDiff.sentence.update(value, window.AmauiDiff.sentence.diff(value, value1)) === value1,
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(5).fill(true)));
    });

    group('json', () => {

      to('array', async () => {
        const value = [
          'AmauiError',
          'AmauiTestError',
          'AssertError',
          'AuthenticationError',
          'AuthorizationError',
          'ValidationError',
          'NotFoundError',
          'PermissionError',
          'AmauiAmqpError',
          'AmauiAwsError',
          'AmauiMongoError',
          'ConnectionError',
          'DeveloperError',
        ];
        const value1 = [
          'AmauiError',
          'AmauiTestError',
          'AuthenticationError',
          'AuthorizationError',
          'ValidationError',
          'NotFoundError',
          'PermissionError',
          'AmauiAmqpError',
          'AmauiAwsError',
          'AmauiMongoError',
          'ConnectionError',
          'DeveloperError',
        ];

        const values_ = [
          AmauiDiff.json instanceof AmauiDiff,
          AmauiDiff.json.options.itemize === AmauiDiff.OPTIONS.line.itemize,
          AmauiDiff.json.options.join === AmauiDiff.OPTIONS.line.join,
          AmauiUtils.equalDeep(AmauiUtils.parse(AmauiDiff.json.update(value, AmauiDiff.json.diff(value, value1))), value1),
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const value = [
            'AmauiError',
            'AmauiTestError',
            'AssertError',
            'AuthenticationError',
            'AuthorizationError',
            'ValidationError',
            'NotFoundError',
            'PermissionError',
            'AmauiAmqpError',
            'AmauiAwsError',
            'AmauiMongoError',
            'ConnectionError',
            'DeveloperError',
          ];
          const value1 = [
            'AmauiError',
            'AmauiTestError',
            'AuthenticationError',
            'AuthorizationError',
            'ValidationError',
            'NotFoundError',
            'PermissionError',
            'AmauiAmqpError',
            'AmauiAwsError',
            'AmauiMongoError',
            'ConnectionError',
            'DeveloperError',
          ];

          const values_ = [
            window.AmauiDiff.json instanceof window.AmauiDiff,
            window.AmauiDiff.json.options.itemize === window.AmauiDiff.OPTIONS.line.itemize,
            window.AmauiDiff.json.options.join === window.AmauiDiff.OPTIONS.line.join,
            window.AmauiUtils.equalDeep(window.AmauiUtils.parse(window.AmauiDiff.json.update(value, window.AmauiDiff.json.diff(value, value1))), value1),
          ];

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql(new Array(4).fill(true)));
      });

      to('object', async () => {
        const value = {
          a: {
            a: {
              a: {
                ab: 4,
              },
            },
            ab: 4,
          },
        };
        const value1 = {
          a: {
            a: {
              b: 4,
              a: {
                ab: 5,
                ac: 4,
              },
            },
          },
          ab: [1, 2, 3, 4],
        };

        const values_ = [
          AmauiDiff.json instanceof AmauiDiff,
          AmauiDiff.json.options.itemize === AmauiDiff.OPTIONS.line.itemize,
          AmauiDiff.json.options.join === AmauiDiff.OPTIONS.line.join,
          AmauiUtils.equalDeep(AmauiUtils.parse(AmauiDiff.json.update(value, AmauiDiff.json.diff(value, value1))), value1),
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const value = {
            a: {
              a: {
                a: {
                  ab: 4,
                },
              },
              ab: 4,
            },
          };
          const value1 = {
            a: {
              a: {
                b: 4,
                a: {
                  ab: 5,
                  ac: 4,
                },
              },
            },
            ab: [1, 2, 3, 4],
          };

          const values_ = [
            window.AmauiDiff.json instanceof window.AmauiDiff,
            window.AmauiDiff.json.options.itemize === window.AmauiDiff.OPTIONS.line.itemize,
            window.AmauiDiff.json.options.join === window.AmauiDiff.OPTIONS.line.join,
            window.AmauiUtils.equalDeep(window.AmauiUtils.parse(window.AmauiDiff.json.update(value, window.AmauiDiff.json.diff(value, value1))), value1),
          ];

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql(new Array(4).fill(true)));
      });

    });

    to('OPTIONS', async () => {
      const values_ = [
        AmauiUtils.is('function', AmauiDiff.OPTIONS.default.init.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.default.itemize.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.default.join.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.default.equal.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.word.init.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.word.itemize.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.word.join.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.line.init.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.line.itemize.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.line.join.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.sentence.init.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.sentence.itemize.method),
        AmauiUtils.is('function', AmauiDiff.OPTIONS.sentence.join.method),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.default.init.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.default.itemize.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.default.join.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.default.equal.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.word.init.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.word.itemize.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.word.join.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.line.init.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.line.itemize.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.line.join.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.sentence.init.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.sentence.itemize.method),
          window.AmauiUtils.is('function', window.AmauiDiff.OPTIONS.sentence.join.method),
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(13).fill(true)));
    });

  });

  group('amauiDiff', () => {

    to('amauidiff', async () => {
      const amauiDiff = new AmauiDiff();

      const values_ = [
        amauiDiff instanceof AmauiDiff,
        amauiDiff.options.init === AmauiDiff.OPTIONS.default.init,
        amauiDiff.options.itemize === AmauiDiff.OPTIONS.default.itemize,
        amauiDiff.options.join === AmauiDiff.OPTIONS.default.join,
        amauiDiff.options.equal === AmauiDiff.OPTIONS.default.equal,
        amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aab')) === 'aab',
        amauiDiff.update('aau', amauiDiff.diff('aau', 'aay ay')) === 'aay ay',
        amauiDiff.update('abcdefk', amauiDiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
        amauiDiff.update('aaa', amauiDiff.diff('aaa', 'd')) === 'd',
        amauiDiff.update('aaa4aa', amauiDiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
        amauiDiff.update('aaba', amauiDiff.diff('aaba', 'adaab')) === 'adaab',
        amauiDiff.update('aba', amauiDiff.diff('aba', 'aa')) === 'aa',
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const amauiDiff = new window.AmauiDiff();

        const values_ = [
          amauiDiff instanceof window.AmauiDiff,
          amauiDiff.options.init === window.AmauiDiff.OPTIONS.default.init,
          amauiDiff.options.itemize === window.AmauiDiff.OPTIONS.default.itemize,
          amauiDiff.options.join === window.AmauiDiff.OPTIONS.default.join,
          amauiDiff.options.equal === window.AmauiDiff.OPTIONS.default.equal,
          amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aab')) === 'aab',
          amauiDiff.update('aau', amauiDiff.diff('aau', 'aay ay')) === 'aay ay',
          amauiDiff.update('abcdefk', amauiDiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
          amauiDiff.update('aaa', amauiDiff.diff('aaa', 'd')) === 'd',
          amauiDiff.update('aaa4aa', amauiDiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
          amauiDiff.update('aaba', amauiDiff.diff('aaba', 'adaab')) === 'adaab',
          amauiDiff.update('aba', amauiDiff.diff('aba', 'aa')) === 'aa',
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(12).fill(true)));
    });

    group('options', () => {

      to('init', async () => {
        const amauiDiff = new AmauiDiff({ init: { method: value => 'a' + value } });

        const values_ = [
          amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aab')) === 'aaab',
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const amauiDiff = new window.AmauiDiff({ init: { method: value => 'a' + value } });

          const values_ = [
            amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aab')) === 'aaab',
          ];

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([true]));
      });

      to('itemize', async () => {
        const amauiDiff = new AmauiDiff({ itemize: { method: value => value.split('aa') } });

        const values_ = [
          amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aad')) === 'd',
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const amauiDiff = new window.AmauiDiff({ itemize: { method: value => value.split('aa') } });

          const values_ = [
            amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aad')) === 'd',
          ];

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([true]));
      });

      to('join', async () => {
        const amauiDiff = new AmauiDiff({ join: { method: value => value.join(' ') } });

        const values_ = [
          amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aad')) === 'a a d',
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const amauiDiff = new window.AmauiDiff({ join: { method: value => value.join(' ') } });

          const values_ = [
            amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aad')) === 'a a d',
          ];

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([true]));
      });

      to('equal', async () => {
        const amauiDiff = new AmauiDiff({ equal: { method: (value, value1) => +value % 2 === +value1 % 2 } });

        const values_ = [
          amauiDiff.diff('aa17', 'aa74'),
          amauiDiff.update('aa17', amauiDiff.diff('aa17', 'aa74')) === 'aa14',
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const amauiDiff = new window.AmauiDiff({ equal: { method: (value, value1) => +value % 2 === +value1 % 2 } });

          const values_ = [
            amauiDiff.diff('aa17', 'aa74'),
            amauiDiff.update('aa17', amauiDiff.diff('aa17', 'aa74')) === 'aa14',
          ];

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          { items: ['r', 1, 'r', 3, 'a', 1, 'a', 'a', 3, '4'] },
          true
        ]));
      });

      group('output', () => {

        to('compress', async () => {
          const values_ = [
            new AmauiDiff().diff('aaa', 'aab'),
            new AmauiDiff({ output: { compressed: true } }).diff('aaa', 'aab'),
            new AmauiDiff({ output: { compressed: false } }).diff('aaa', 'aab'),
          ];

          const valueBrowsers = await evaluate((window: any) => {
            const values_ = [
              new window.AmauiDiff().diff('aaa', 'aab'),
              new window.AmauiDiff({ output: { compressed: true } }).diff('aaa', 'aab'),
              new window.AmauiDiff({ output: { compressed: false } }).diff('aaa', 'aab'),
            ];

            return values_;
          });
          const valueNode = values_;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql([
            { items: ['r', 2, 'a', 2, 'b'] },
            { items: ['r', 2, 'a', 2, 'b'] },
            { items: ['remove', 2, 'add', 2, 'b'] }
          ]));
        });

      });

    });

    to('diff', async () => {
      const amauiDiff = new AmauiDiff();

      const values_ = [
        amauiDiff.diff('aaa', 'aab'),
        amauiDiff.diff('aau', 'aay ay'),
        amauiDiff.diff('abcdefk', 'bhdefck'),
        amauiDiff.diff('aaa', 'd'),
        amauiDiff.diff('aaa4aa', 'a44aa'),
        amauiDiff.diff('aaba', 'adaab'),
        amauiDiff.diff('aba', 'aa'),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const amauiDiff = new window.AmauiDiff();

        const values_ = [
          amauiDiff.diff('aaa', 'aab'),
          amauiDiff.diff('aau', 'aay ay'),
          amauiDiff.diff('abcdefk', 'bhdefck'),
          amauiDiff.diff('aaa', 'd'),
          amauiDiff.diff('aaa4aa', 'a44aa'),
          amauiDiff.diff('aaba', 'adaab'),
          amauiDiff.diff('aba', 'aa'),
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        { items: ['r', 2, 'a', 2, 'b'] },
        { items: ['r', 2, 'a', 2, 'y', 'a', 3, ' ', 'a', 4, 'a', 'a', 5, 'y'] },
        { items: ['r', 0, 'r', 2, 'a', 1, 'h', 'a', 5, 'c'] },
        { items: ['r', 0, 'r', 1, 'r', 2, 'a', 0, 'd'] },
        { items: ['r', 1, 'r', 2, 'a', 2, '4'] },
        { items: ['r', 3, 'a', 1, 'd', 'a', 3, 'a'] },
        { items: ['r', 1] }
      ]));

    });

    to('updateGroups', async () => {
      const amauiDiff = new AmauiDiff();

      const values_ = [
        AmauiDiff.updateGroups(amauiDiff.diff('aaa', 'aab')),
        AmauiDiff.updateGroups(amauiDiff.diff('aau', 'aay ay')),
        AmauiDiff.updateGroups(amauiDiff.diff('abcdefk', 'bhdefck')),
        AmauiDiff.updateGroups(amauiDiff.diff('aaa', 'd')),
        AmauiDiff.updateGroups(amauiDiff.diff('aaa4aa', 'a44aa')),
        AmauiDiff.updateGroups(amauiDiff.diff('aaba', 'adaab')),
        AmauiDiff.updateGroups(amauiDiff.diff('aba', 'aa')),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const amauiDiff = new window.AmauiDiff();

        const values_ = [
          window.AmauiDiff.updateGroups(amauiDiff.diff('aaa', 'aab')),
          window.AmauiDiff.updateGroups(amauiDiff.diff('aau', 'aay ay')),
          window.AmauiDiff.updateGroups(amauiDiff.diff('abcdefk', 'bhdefck')),
          window.AmauiDiff.updateGroups(amauiDiff.diff('aaa', 'd')),
          window.AmauiDiff.updateGroups(amauiDiff.diff('aaa4aa', 'a44aa')),
          window.AmauiDiff.updateGroups(amauiDiff.diff('aaba', 'adaab')),
          window.AmauiDiff.updateGroups(amauiDiff.diff('aba', 'aa')),
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        [[['r', 2], ['a', 2, 'b']]],
        [[['r', 2], ['a', 2, 'y'], ['a', 3, ' '], ['a', 4, 'a'], ['a', 5, 'y']]],
        [[['r', 0], ['r', 2]], [['a', 1, 'h'], ['a', 5, 'c']]],
        [[['r', 0], ['r', 1], ['r', 2]], [['a', 0, 'd']]],
        [[['r', 1], ['r', 2]], [['a', 2, '4']]],
        [[['r', 3], ['a', 1, 'd'], ['a', 3, 'a']]],
        [[['r', 1]]]
      ]));
    });

    to('update', async () => {
      const amauiDiff = new AmauiDiff();

      const values_ = [
        amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aab')) === 'aab',
        amauiDiff.update('aau', amauiDiff.diff('aau', 'aay ay')) === 'aay ay',
        amauiDiff.update('abcdefk', amauiDiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
        amauiDiff.update('aaa', amauiDiff.diff('aaa', 'd')) === 'd',
        amauiDiff.update('aaa4aa', amauiDiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
        amauiDiff.update('aaba', amauiDiff.diff('aaba', 'adaab')) === 'adaab',
        amauiDiff.update('aba', amauiDiff.diff('aba', 'aa')) === 'aa',
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const amauiDiff = new window.AmauiDiff();

        const values_ = [
          amauiDiff.update('aaa', amauiDiff.diff('aaa', 'aab')) === 'aab',
          amauiDiff.update('aau', amauiDiff.diff('aau', 'aay ay')) === 'aay ay',
          amauiDiff.update('abcdefk', amauiDiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
          amauiDiff.update('aaa', amauiDiff.diff('aaa', 'd')) === 'd',
          amauiDiff.update('aaa4aa', amauiDiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
          amauiDiff.update('aaba', amauiDiff.diff('aaba', 'adaab')) === 'adaab',
          amauiDiff.update('aba', amauiDiff.diff('aba', 'aa')) === 'aa',
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(7).fill(true)));
    });

  });

});
