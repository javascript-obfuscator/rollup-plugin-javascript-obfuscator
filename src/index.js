import JavaScriptObfuscator from 'javascript-obfuscator';

export default function javascriptObfuscator(options = {}) {
	return {
		name: 'javascript-obfuscator',

		transformBundle(code) {
			const obfuscationResult = JavaScriptObfuscator.obfuscate(code, options);
			let result = {code: obfuscationResult.getObfuscatedCode()};

			if (options.sourceMap && options.sourceMapMode !== 'inline') {
				result.map = obfuscationResult.getSourceMap();
			}

			return result;
		}
	};

}