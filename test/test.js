const rollup = require('rollup'),
	obfuscatorPlugin = require('..');

process.chdir(__dirname);


const testFunc = function (entry, configValue, expectedValue, expectedSourceMap) {
	return function () {
		expect.assertions(2);
		return rollup.rollup({
			entry: `./fixtures/${entry}.js`,
			plugins: [
				obfuscatorPlugin(configValue)
			]
		}).then(function (bundle) {
			return bundle.generate({format: 'es', sourceMap: !!expectedSourceMap}).then(function (res) {
				expect(res.code).toContain(expectedValue);
				if (expectedSourceMap) {
					expect(res.map).toBeInstanceOf(Object);
				}
				else {
					expect(res.map).toBe(null);
				}
			});
		});
	}
};

describe('rollup-plugin-javascript-obfuscator', function () {
	it('obfuscates the code', testFunc('simple', {}, 'console.log("Hello, world!");'));

	it('generates source maps correctly', testFunc('simple', {sourceMap: true}, 'console.log("Hello, world!");', true));

	it('generates inline source maps correctly', testFunc('simple', {
		sourceMap: true,
		sourceMapMode: 'inline'
	}, 'console.log("Hello, world!");'));

});