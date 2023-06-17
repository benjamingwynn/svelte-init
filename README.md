# Oh, so much to configure

I couldn't be bothered to keep typing out all of this config every time I wanted to init a Svelte repo, so I made this to clone instead, as a base for my personal Svelte projects.

```bash
git clone https://github.com/benjamingwynn/svelte-init
cd svelte-init
git remote remove origin # don't changes upstream
pnpm i # grab build tools
npm run start # go
```

## What it this *exactly*?

Configs for Svelte repos, that could be monorepos, without SvelteKit, using Typescript+pnpm, my preferred stack.

There are sensible configs for the following:

- pnpm
- vite
- svelte
- typescript
	- includes paths configured in vite
- prettier
- vscode
- eslint

You'll note there's `site` instead of `src`. The idea here is you may have a server code directory, and treat this as a monorepo, if required.

Or just rename `site` back to `src`, or add `site/src`, or whatever. It's up to you, this is just a base.

### Why is there only one tsconfig.json if this can be used as a monorepo?

Trust me, it's not worth the effort dealing with project references, `composite` and `path`. These options don't work ideally, and other tools struggle handling them properly, which can lead to bugs.

If you're concerned about leaking your code between client/server, I'd recommend writing a Vite plugin to warn/error instead.

## How to use

Run the commands above, make sure to change the package name and remove `private: true` in the package.json when you're ready to continue.