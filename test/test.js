const rollup = require('rollup'),
  obfuscatorPlugin = require('..');

process.chdir(__dirname);


const testFunc = function (entry, configValue, expectedValue, expectedSourceMap) {
  return function () {
    expect.assertions(2);
    return rollup.rollup({
      input: `./fixtures/${entry}.js`,
      plugins: [
        obfuscatorPlugin(configValue)
      ]
    }).then(function (bundle) {
      return bundle.generate({ format: 'esm', sourcemap: !!expectedSourceMap }).then(function (res) {
        expect(res.output[0].code).toContain(expectedValue);
        if (expectedSourceMap) {
          expect(res.output[0].map).toBeInstanceOf(Object);
        }
        else {
          expect(res.output[0].map).toBe(null);
        }
      });
    });
  }
};

describe('rollup-plugin-javascript-obfuscator', function () {
  it('obfuscates the code', testFunc('simple', {}, 'console.log("Hello, world!");'));

  it('generates source maps correctly', testFunc('simple', { sourceMap: true }, 'console.log("Hello, world!");', true));

  it('generates inline source maps correctly', testFunc('simple', {
    sourceMap: true,
    sourceMapMode: 'inline'
  }, 'console.log("Hello, world!");'));

});