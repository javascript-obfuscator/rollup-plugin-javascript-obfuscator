import JavaScriptObfuscator from 'javascript-obfuscator';

export default function replaceConfig(options = {}) {
	return {
		name: 'javascript-obfuscator',

		transform(code) {
			const obfuscationResult = JavaScriptObfuscator.obfuscate(String(code), options);
			let result = {code: obfuscationResult.getObfuscatedCode()};

			if (options.sourceMap && options.sourceMapMode !== 'inline') {
				result.map = obfuscationResult.getSourceMap();
			}

			return result;
		}
	};

}