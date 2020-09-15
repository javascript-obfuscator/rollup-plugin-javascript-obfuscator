import buble from 'rollup-plugin-buble';

const pkg = require( './package.json' ),
	external = Object.keys( pkg.dependencies );

export default {
  input: 'src/index.js',
  output: [
		{ file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
	],
	plugins: [ buble() ],
	external: external,
  sourcemap: true
};