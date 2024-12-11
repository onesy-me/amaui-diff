/* tslint:disable: no-shadowed-variable */
import * as OnesyUtils from '@onesy/utils';

import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import OnesyDiff from '../src';

group('OnesyDiff', () => {

  group('OnesyDiff', () => {

    to('onesydiff', async () => {
      const values_ = [
        OnesyDiff.onesydiff instanceof OnesyDiff,
        OnesyDiff.onesydiff.options.init === OnesyDiff.OPTIONS.default.init,
        OnesyDiff.onesydiff.options.itemize === OnesyDiff.OPTIONS.default.itemize,
        OnesyDiff.onesydiff.options.join === OnesyDiff.OPTIONS.default.join,
        OnesyDiff.onesydiff.options.equal === OnesyDiff.OPTIONS.default.equal,
        OnesyDiff.onesydiff.update('aaa', OnesyDiff.onesydiff.diff('aaa', 'aab')) === 'aab',
        OnesyDiff.onesydiff.update('aau', OnesyDiff.onesydiff.diff('aau', 'aay ay')) === 'aay ay',
        OnesyDiff.onesydiff.update('abcdefk', OnesyDiff.onesydiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
        OnesyDiff.onesydiff.update('aaa', OnesyDiff.onesydiff.diff('aaa', 'd')) === 'd',
        OnesyDiff.onesydiff.update('aaa4aa', OnesyDiff.onesydiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
        OnesyDiff.onesydiff.update('aaba', OnesyDiff.onesydiff.diff('aaba', 'adaab')) === 'adaab',
        OnesyDiff.onesydiff.update('aba', OnesyDiff.onesydiff.diff('aba', 'aa')) === 'aa',
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [
          window.OnesyDiff.onesydiff instanceof window.OnesyDiff,
          window.OnesyDiff.onesydiff.options.init === window.OnesyDiff.OPTIONS.default.init,
          window.OnesyDiff.onesydiff.options.itemize === window.OnesyDiff.OPTIONS.default.itemize,
          window.OnesyDiff.onesydiff.options.join === window.OnesyDiff.OPTIONS.default.join,
          window.OnesyDiff.onesydiff.options.equal === window.OnesyDiff.OPTIONS.default.equal,
          window.OnesyDiff.onesydiff.update('aaa', window.OnesyDiff.onesydiff.diff('aaa', 'aab')) === 'aab',
          window.OnesyDiff.onesydiff.update('aau', window.OnesyDiff.onesydiff.diff('aau', 'aay ay')) === 'aay ay',
          window.OnesyDiff.onesydiff.update('abcdefk', window.OnesyDiff.onesydiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
          window.OnesyDiff.onesydiff.update('aaa', window.OnesyDiff.onesydiff.diff('aaa', 'd')) === 'd',
          window.OnesyDiff.onesydiff.update('aaa4aa', window.OnesyDiff.onesydiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
          window.OnesyDiff.onesydiff.update('aaba', window.OnesyDiff.onesydiff.diff('aaba', 'adaab')) === 'adaab',
          window.OnesyDiff.onesydiff.update('aba', window.OnesyDiff.onesydiff.diff('aba', 'aa')) === 'aa',
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(12).fill(true)));
    });

    to('word', async () => {
      const values_ = [
        OnesyDiff.word instanceof OnesyDiff,
        OnesyDiff.word.options.init === OnesyDiff.OPTIONS.word.init,
        OnesyDiff.word.options.itemize === OnesyDiff.OPTIONS.word.itemize,
        OnesyDiff.word.options.join === OnesyDiff.OPTIONS.word.join,
        OnesyDiff.word.update('aaaa aaaa aaaa', OnesyDiff.word.diff('aaaa aaaa aaaa', 'auaa aaaa ayaa')) === 'auaa aaaa ayaa',
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [
          window.OnesyDiff.word instanceof window.OnesyDiff,
          window.OnesyDiff.word.options.init === window.OnesyDiff.OPTIONS.word.init,
          window.OnesyDiff.word.options.itemize === window.OnesyDiff.OPTIONS.word.itemize,
          window.OnesyDiff.word.options.join === window.OnesyDiff.OPTIONS.word.join,
          window.OnesyDiff.word.update('aaaa aaaa aaaa', window.OnesyDiff.word.diff('aaaa aaaa aaaa', 'auaa aaaa ayaa')) === 'auaa aaaa ayaa',
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
        OnesyDiff.line instanceof OnesyDiff,
        OnesyDiff.line.options.init === OnesyDiff.OPTIONS.line.init,
        OnesyDiff.line.options.itemize === OnesyDiff.OPTIONS.line.itemize,
        OnesyDiff.line.options.join === OnesyDiff.OPTIONS.line.join,
        OnesyDiff.line.update(value, OnesyDiff.line.diff(value, value1)) === value1,
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
          window.OnesyDiff.line instanceof window.OnesyDiff,
          window.OnesyDiff.line.options.init === window.OnesyDiff.OPTIONS.line.init,
          window.OnesyDiff.line.options.itemize === window.OnesyDiff.OPTIONS.line.itemize,
          window.OnesyDiff.line.options.join === window.OnesyDiff.OPTIONS.line.join,
          window.OnesyDiff.line.update(value, window.OnesyDiff.line.diff(value, value1)) === value1,
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
        OnesyDiff.sentence instanceof OnesyDiff,
        OnesyDiff.sentence.options.init === OnesyDiff.OPTIONS.sentence.init,
        OnesyDiff.sentence.options.itemize === OnesyDiff.OPTIONS.sentence.itemize,
        OnesyDiff.sentence.options.join === OnesyDiff.OPTIONS.sentence.join,
        OnesyDiff.sentence.update(value, OnesyDiff.sentence.diff(value, value1)) === value1,
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const value = 'Lorem u ipsum dolor sit amet, consectetur adipiscing elit. Fuscem dolor em, facilisis sed eratr sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus mmalesuad. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestassed maurelit, eratr sit molestie nisi semper at. Cras interdum massa nec mmolestierutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.';
        const value1 = 'Lorem u ipsum dolor sit amet, consectetur adipiscing elit. Fuscem dolor em, facilisis sed eratr sit amet, pharetra blandit augue. Aed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus mmalesuad. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestassed maurelit, eratr sit molestie nisi semper at. A.';

        const values_ = [
          window.OnesyDiff.sentence instanceof window.OnesyDiff,
          window.OnesyDiff.sentence.options.init === window.OnesyDiff.OPTIONS.sentence.init,
          window.OnesyDiff.sentence.options.itemize === window.OnesyDiff.OPTIONS.sentence.itemize,
          window.OnesyDiff.sentence.options.join === window.OnesyDiff.OPTIONS.sentence.join,
          window.OnesyDiff.sentence.update(value, window.OnesyDiff.sentence.diff(value, value1)) === value1,
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
          'OnesyError',
          'OnesyTestError',
          'AssertError',
          'AuthenticationError',
          'AuthorizationError',
          'ValidationError',
          'NotFoundError',
          'PermissionError',
          'OnesyAmqpError',
          'OnesyAwsError',
          'OnesyMongoError',
          'ConnectionError',
          'DeveloperError',
        ];
        const value1 = [
          'OnesyError',
          'OnesyTestError',
          'AuthenticationError',
          'AuthorizationError',
          'ValidationError',
          'NotFoundError',
          'PermissionError',
          'OnesyAmqpError',
          'OnesyAwsError',
          'OnesyMongoError',
          'ConnectionError',
          'DeveloperError',
        ];

        const values_ = [
          OnesyDiff.json instanceof OnesyDiff,
          OnesyDiff.json.options.itemize === OnesyDiff.OPTIONS.line.itemize,
          OnesyDiff.json.options.join === OnesyDiff.OPTIONS.line.join,
          OnesyUtils.equalDeep(OnesyUtils.parse(OnesyDiff.json.update(value, OnesyDiff.json.diff(value, value1))), value1),
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const value = [
            'OnesyError',
            'OnesyTestError',
            'AssertError',
            'AuthenticationError',
            'AuthorizationError',
            'ValidationError',
            'NotFoundError',
            'PermissionError',
            'OnesyAmqpError',
            'OnesyAwsError',
            'OnesyMongoError',
            'ConnectionError',
            'DeveloperError',
          ];
          const value1 = [
            'OnesyError',
            'OnesyTestError',
            'AuthenticationError',
            'AuthorizationError',
            'ValidationError',
            'NotFoundError',
            'PermissionError',
            'OnesyAmqpError',
            'OnesyAwsError',
            'OnesyMongoError',
            'ConnectionError',
            'DeveloperError',
          ];

          const values_ = [
            window.OnesyDiff.json instanceof window.OnesyDiff,
            window.OnesyDiff.json.options.itemize === window.OnesyDiff.OPTIONS.line.itemize,
            window.OnesyDiff.json.options.join === window.OnesyDiff.OPTIONS.line.join,
            window.OnesyUtils.equalDeep(window.OnesyUtils.parse(window.OnesyDiff.json.update(value, window.OnesyDiff.json.diff(value, value1))), value1),
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
          OnesyDiff.json instanceof OnesyDiff,
          OnesyDiff.json.options.itemize === OnesyDiff.OPTIONS.line.itemize,
          OnesyDiff.json.options.join === OnesyDiff.OPTIONS.line.join,
          OnesyUtils.equalDeep(OnesyUtils.parse(OnesyDiff.json.update(value, OnesyDiff.json.diff(value, value1))), value1),
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
            window.OnesyDiff.json instanceof window.OnesyDiff,
            window.OnesyDiff.json.options.itemize === window.OnesyDiff.OPTIONS.line.itemize,
            window.OnesyDiff.json.options.join === window.OnesyDiff.OPTIONS.line.join,
            window.OnesyUtils.equalDeep(window.OnesyUtils.parse(window.OnesyDiff.json.update(value, window.OnesyDiff.json.diff(value, value1))), value1),
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
        OnesyUtils.is('function', OnesyDiff.OPTIONS.default.init.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.default.itemize.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.default.join.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.default.equal.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.word.init.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.word.itemize.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.word.join.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.line.init.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.line.itemize.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.line.join.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.sentence.init.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.sentence.itemize.method),
        OnesyUtils.is('function', OnesyDiff.OPTIONS.sentence.join.method),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.default.init.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.default.itemize.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.default.join.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.default.equal.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.word.init.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.word.itemize.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.word.join.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.line.init.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.line.itemize.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.line.join.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.sentence.init.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.sentence.itemize.method),
          window.OnesyUtils.is('function', window.OnesyDiff.OPTIONS.sentence.join.method),
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(13).fill(true)));
    });

  });

  group('onesyDiff', () => {

    to('onesydiff', async () => {
      const onesyDiff = new OnesyDiff();

      const values_ = [
        onesyDiff instanceof OnesyDiff,
        onesyDiff.options.init === OnesyDiff.OPTIONS.default.init,
        onesyDiff.options.itemize === OnesyDiff.OPTIONS.default.itemize,
        onesyDiff.options.join === OnesyDiff.OPTIONS.default.join,
        onesyDiff.options.equal === OnesyDiff.OPTIONS.default.equal,
        onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aab')) === 'aab',
        onesyDiff.update('aau', onesyDiff.diff('aau', 'aay ay')) === 'aay ay',
        onesyDiff.update('abcdefk', onesyDiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
        onesyDiff.update('aaa', onesyDiff.diff('aaa', 'd')) === 'd',
        onesyDiff.update('aaa4aa', onesyDiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
        onesyDiff.update('aaba', onesyDiff.diff('aaba', 'adaab')) === 'adaab',
        onesyDiff.update('aba', onesyDiff.diff('aba', 'aa')) === 'aa',
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const onesyDiff = new window.OnesyDiff();

        const values_ = [
          onesyDiff instanceof window.OnesyDiff,
          onesyDiff.options.init === window.OnesyDiff.OPTIONS.default.init,
          onesyDiff.options.itemize === window.OnesyDiff.OPTIONS.default.itemize,
          onesyDiff.options.join === window.OnesyDiff.OPTIONS.default.join,
          onesyDiff.options.equal === window.OnesyDiff.OPTIONS.default.equal,
          onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aab')) === 'aab',
          onesyDiff.update('aau', onesyDiff.diff('aau', 'aay ay')) === 'aay ay',
          onesyDiff.update('abcdefk', onesyDiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
          onesyDiff.update('aaa', onesyDiff.diff('aaa', 'd')) === 'd',
          onesyDiff.update('aaa4aa', onesyDiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
          onesyDiff.update('aaba', onesyDiff.diff('aaba', 'adaab')) === 'adaab',
          onesyDiff.update('aba', onesyDiff.diff('aba', 'aa')) === 'aa',
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(12).fill(true)));
    });

    group('options', () => {

      to('init', async () => {
        const onesyDiff = new OnesyDiff({ init: { method: value => 'a' + value } });

        const values_ = [
          onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aab')) === 'aaab',
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const onesyDiff = new window.OnesyDiff({ init: { method: value => 'a' + value } });

          const values_ = [
            onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aab')) === 'aaab',
          ];

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([true]));
      });

      to('itemize', async () => {
        const onesyDiff = new OnesyDiff({ itemize: { method: value => value.split('aa') } });

        const values_ = [
          onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aad')) === 'd',
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const onesyDiff = new window.OnesyDiff({ itemize: { method: value => value.split('aa') } });

          const values_ = [
            onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aad')) === 'd',
          ];

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([true]));
      });

      to('join', async () => {
        const onesyDiff = new OnesyDiff({ join: { method: value => value.join(' ') } });

        const values_ = [
          onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aad')) === 'a a d',
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const onesyDiff = new window.OnesyDiff({ join: { method: value => value.join(' ') } });

          const values_ = [
            onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aad')) === 'a a d',
          ];

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([true]));
      });

      to('equal', async () => {
        const onesyDiff = new OnesyDiff({ equal: { method: (value, value1) => +value % 2 === +value1 % 2 } });

        const values_ = [
          onesyDiff.diff('aa17', 'aa74'),
          onesyDiff.update('aa17', onesyDiff.diff('aa17', 'aa74')) === 'aa14',
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const onesyDiff = new window.OnesyDiff({ equal: { method: (value, value1) => +value % 2 === +value1 % 2 } });

          const values_ = [
            onesyDiff.diff('aa17', 'aa74'),
            onesyDiff.update('aa17', onesyDiff.diff('aa17', 'aa74')) === 'aa14',
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
            new OnesyDiff().diff('aaa', 'aab'),
            new OnesyDiff({ output: { compressed: true } }).diff('aaa', 'aab'),
            new OnesyDiff({ output: { compressed: false } }).diff('aaa', 'aab'),
          ];

          const valueBrowsers = await evaluate((window: any) => {
            const values_ = [
              new window.OnesyDiff().diff('aaa', 'aab'),
              new window.OnesyDiff({ output: { compressed: true } }).diff('aaa', 'aab'),
              new window.OnesyDiff({ output: { compressed: false } }).diff('aaa', 'aab'),
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
      const onesyDiff = new OnesyDiff();

      const values_ = [
        onesyDiff.diff('aaa', 'aab'),
        onesyDiff.diff('aau', 'aay ay'),
        onesyDiff.diff('abcdefk', 'bhdefck'),
        onesyDiff.diff('aaa', 'd'),
        onesyDiff.diff('aaa4aa', 'a44aa'),
        onesyDiff.diff('aaba', 'adaab'),
        onesyDiff.diff('aba', 'aa'),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const onesyDiff = new window.OnesyDiff();

        const values_ = [
          onesyDiff.diff('aaa', 'aab'),
          onesyDiff.diff('aau', 'aay ay'),
          onesyDiff.diff('abcdefk', 'bhdefck'),
          onesyDiff.diff('aaa', 'd'),
          onesyDiff.diff('aaa4aa', 'a44aa'),
          onesyDiff.diff('aaba', 'adaab'),
          onesyDiff.diff('aba', 'aa'),
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
      const onesyDiff = new OnesyDiff();

      const values_ = [
        OnesyDiff.updateGroups(onesyDiff.diff('aaa', 'aab')),
        OnesyDiff.updateGroups(onesyDiff.diff('aau', 'aay ay')),
        OnesyDiff.updateGroups(onesyDiff.diff('abcdefk', 'bhdefck')),
        OnesyDiff.updateGroups(onesyDiff.diff('aaa', 'd')),
        OnesyDiff.updateGroups(onesyDiff.diff('aaa4aa', 'a44aa')),
        OnesyDiff.updateGroups(onesyDiff.diff('aaba', 'adaab')),
        OnesyDiff.updateGroups(onesyDiff.diff('aba', 'aa')),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const onesyDiff = new window.OnesyDiff();

        const values_ = [
          window.OnesyDiff.updateGroups(onesyDiff.diff('aaa', 'aab')),
          window.OnesyDiff.updateGroups(onesyDiff.diff('aau', 'aay ay')),
          window.OnesyDiff.updateGroups(onesyDiff.diff('abcdefk', 'bhdefck')),
          window.OnesyDiff.updateGroups(onesyDiff.diff('aaa', 'd')),
          window.OnesyDiff.updateGroups(onesyDiff.diff('aaa4aa', 'a44aa')),
          window.OnesyDiff.updateGroups(onesyDiff.diff('aaba', 'adaab')),
          window.OnesyDiff.updateGroups(onesyDiff.diff('aba', 'aa')),
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
      const onesyDiff = new OnesyDiff();

      const values_ = [
        onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aab')) === 'aab',
        onesyDiff.update('aau', onesyDiff.diff('aau', 'aay ay')) === 'aay ay',
        onesyDiff.update('abcdefk', onesyDiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
        onesyDiff.update('aaa', onesyDiff.diff('aaa', 'd')) === 'd',
        onesyDiff.update('aaa4aa', onesyDiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
        onesyDiff.update('aaba', onesyDiff.diff('aaba', 'adaab')) === 'adaab',
        onesyDiff.update('aba', onesyDiff.diff('aba', 'aa')) === 'aa',
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const onesyDiff = new window.OnesyDiff();

        const values_ = [
          onesyDiff.update('aaa', onesyDiff.diff('aaa', 'aab')) === 'aab',
          onesyDiff.update('aau', onesyDiff.diff('aau', 'aay ay')) === 'aay ay',
          onesyDiff.update('abcdefk', onesyDiff.diff('abcdefk', 'bhdefck')) === 'bhdefck',
          onesyDiff.update('aaa', onesyDiff.diff('aaa', 'd')) === 'd',
          onesyDiff.update('aaa4aa', onesyDiff.diff('aaa4aa', 'a44aa')) === 'a44aa',
          onesyDiff.update('aaba', onesyDiff.diff('aaba', 'adaab')) === 'adaab',
          onesyDiff.update('aba', onesyDiff.diff('aba', 'aa')) === 'aa',
        ];

        return values_;
      });
      const valueNode = values_;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(new Array(7).fill(true)));
    });

  });

});
