import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import jsonc from 'jsonc-parser';
import fs from 'fs';
import path from 'path';

// load tsconfig from disk using jsonc-parsers
const tsconfig = jsonc.parse(fs.readFileSync('./tsconfig.json').toString());

// get alias from tsconfig using hacks
const alias = Object.fromEntries(
	// convert compilerOptions.paths to entries, and back to an obj when done
	Object.entries(tsconfig.compilerOptions.paths).map(([key, value]) => [
		// replace /* in key and path
		key.replace('/*', ''),
		// resolve path to current working dir
		path.resolve(process.cwd(), value[0].replace('/*', '')),
	])
);

export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {},
			configFile: false,
			preprocess: preprocess(),
		}),
	],
	resolve: {
		alias,
	},
});
