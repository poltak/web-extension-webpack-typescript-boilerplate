# web-extension-webpack-typescript-boilerplate

WebExt boilerplate set up to work with a webpack build + TypeScript

Repurposed from Memex project's build: https://github.com/WorldBrain/Memex

## Features

-   Set up to write all your code in TypeScript.
-   Webpack build set up to output background, content, and options pages.
-   Set up with [WebExtension `browser` API Polyfill](https://github.com/mozilla/webextension-polyfill) to easily work on both Firefox and Chrome.

## Installation

```bash
# Clone the repo
git clone https://github.com/poltak/web-extension-webpack-typescript-boilerplate

# Install deps
npm i
```

## Development

```bash
# Watch and build source code to 'extension/'
npm run watch

# Watch and build source code to 'extension/' with system build notifications
npm run watch:notif

# Build source code for production
npm run build:prod

# Build source code for production + package source and build for store submissions
npm run build:package

# Run all linting checks
npm run lint

# Clean webpack build cache (run if running into problems between builds)
npm run cache:clean
```

## Getting started

**TODO...**

## LICENSE

[MIT](LICENSE)
