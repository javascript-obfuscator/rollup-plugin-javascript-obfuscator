'use strict';

var JavaScriptObfuscator = require('javascript-obfuscator');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var JavaScriptObfuscator__default = /*#__PURE__*/_interopDefaultLegacy(JavaScriptObfuscator);

function javascriptObfuscator(options) {
  if ( options === void 0 ) options = {};

  return {
    name: 'javascript-obfuscator',

    renderChunk: function renderChunk(code) {
      var obfuscationResult = JavaScriptObfuscator__default['default'].obfuscate(code, options);
      var result = { code: obfuscationResult.getObfuscatedCode() };

      if (options.sourceMap && options.sourceMapMode !== 'inline') {
        result.map = obfuscationResult.getSourceMap();
      }

      return result;
    }
  };

}

module.exports = javascriptObfuscator;
