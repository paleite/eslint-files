# eslint-files

Created for use together with [lint-staged][lint-staged], removes all files ESLint ignores.

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev eslint-files
```

or

for installation via [yarn][yarn]

```
yarn add --dev eslint-files
```

This library has a `peerDependencies` listing for `eslint@>=7.0.0`.

## Example

```js
// lint-staged.config.js
const { eslintFiles } = require("eslint-files");

module.exports = {
  "**/*.{ts,tsx,js,jsx}": async (files) =>
    `eslint --max-warnings=0 ${await eslintFiles(files)}`,
};
```

[lint-staged]: https://github.com/okonet/lint-staged
[npm]: https://www.npmjs.com/
[yarn]: https://classic.yarnpkg.com
[node]: https://nodejs.org
