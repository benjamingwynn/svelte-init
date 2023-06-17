module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:svelte/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		parser: {
			parser: '@typescript-eslint/parser',
		},
		extraFileExtensions: ['.svelte'],
		project: ['./tsconfig.json'],
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	rules: {
		// add your eslint rules here
		// 2=error, 1=warn, 0=disable (from `extends` above)
		'no-labels': 2,
		'@typescript-eslint/no-floating-promises': 2,
		'prefer-template': 1,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-unsafe-assignment': 0,
		'@typescript-eslint/no-unsafe-member-access': 0,
		'@typescript-eslint/no-unsafe-call': 0,
		'@typescript-eslint/no-unsafe-return': 0,
		'@typescript-eslint/no-unsafe-argument': 0,
		'@typescript-eslint/restrict-plus-operands': 0,
		'@typescript-eslint/no-explicit-any': 0,
	},
};
