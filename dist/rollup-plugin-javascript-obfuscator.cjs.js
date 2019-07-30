'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var JavaScriptObfuscator = _interopDefault(require('javascript-obfuscator'));

function javascriptObfuscator(options) {
	if ( options === void 0 ) options = {};

	return {
		name: 'javascript-obfuscator',

		renderChunk: function renderChunk(code) {
			var obfuscationResult = JavaScriptObfuscator.obfuscate(code, options);
			var result = {code: obfuscationResult.getObfuscatedCode()};

			if (options.sourceMap && options.sourceMapMode !== 'inline') {
				result.map = obfuscationResult.getSourceMap();
			}

			return result;
		}
	};

}

module.exports = javascriptObfuscator;
//# sourceMappingURL=rollup-plugin-javascript-obfuscator.cjs.js.map
