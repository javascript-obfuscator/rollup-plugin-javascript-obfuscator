rollup-plugin-javascript-obfuscator
==========================
[![Build Status](https://travis-ci.org/Wain-PC/rollup-plugin-javascript-obfuscator.svg?branch=master)](https://travis-ci.org/Wain-PC/rollup-plugin-javascript-obfuscator)
[![Coverage Status](https://coveralls.io/repos/github/Wain-PC/rollup-plugin-javascript-obfuscator/badge.svg?branch=master)](https://coveralls.io/github/Wain-PC/rollup-plugin-javascript-obfuscator?branch=master)

Rollup plugin for [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator).
## Installation

Install the package:

- npm `npm install --save-dev rollup-plugin-javascript-obfuscator`
- yarn `yarn add --dev rollup-plugin-javascript-obfuscator`

## Usage

[Pass any options available in the obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator#javascript-obfuscator-options).

```javascript
import { rollup } from 'rollup'
import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator'

	rollup({
		entry: 'main.js',
		plugins: [
			//Pass options here (optional)
			obfuscatorPlugin({
			  compact: true
			})
		]
	})
```

## Source Maps
Inline source map configuration:
```
{
	sourceMap: true,
	sourceMapMode: 'inline'
}
```
Separate source map configuration:
```
{
	sourceMap: true
}
```