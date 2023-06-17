export const util = {
	isBrowser,
} as const;

function isBrowser() {
	return globalThis.window && globalThis === window && 'localStorage' in globalThis;
}
