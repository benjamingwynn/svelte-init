const config = {
	plugins: [require('prettier-plugin-svelte')],
	overrides: [
		{
			files: '*.svelte',
			options: { parser: 'svelte' },
		},
	],
	pluginSearchDirs: ['.'],
	trailingComma: 'es5', // improve git diffing
	endOfLine: 'lf',
	tabWidth: 4,
	semi: true,
	useTabs: true,
	insertPragma: false,
	singleQuote: true,
	jsxSingleQuote: true,
	bracketSpacing: true,
	arrowParens: 'avoid',
	printWidth: 120, // you might also want to delete the ruler in vscode/settings.json
};

module.exports = config;
