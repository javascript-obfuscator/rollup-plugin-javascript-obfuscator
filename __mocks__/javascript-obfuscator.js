module.exports = {
	obfuscate: (code, options)=>({
		//Our fake obfuscator will simply add `;` to the code.
		getObfuscatedCode: ()=>`${code};`,
		//It'll also return a fake source map
		getSourceMap: ()=> ({
			version : 3,
			file: "out.js",
			sourceRoot : "",
			sources: ["foo.js", "bar.js"],
			names: ["src", "maps", "are", "fun"],
			mappings: "AAgBC,SAAQ,CAAEA"
		})
	})
};