# eslint-files

Use this for your lint-staged setup:

_`lint-staged.config.js`_:

```js
const { eslintFiles } = require("eslint-files");

module.exports = {
  "**/*.{ts,tsx,js,jsx}": async (files) =>
    `eslint --max-warnings=0 ${await eslintFiles(files)}`,
};
```
