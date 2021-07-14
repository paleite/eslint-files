const { eslintFiles } = require("./dist");

module.exports = {
  ".*ignore": "prettier --write",
  "*.js": [
    () => "tsc --project tsconfig.eslint.json",
    "jest --bail --findRelatedTests",
    /**
     * @param {string[]} files
     */
    async (files) =>
      `eslint --config .eslintrc.precommit.js --fix --format codeframe --format codeframe --max-warnings=0 ${await eslintFiles(
        files
      )}`,
    "prettier --write",
  ],
  "*.json": "prettier --write",
  "*.md": "prettier --write",
  "*.ts?(x)": [
    () => "yarn run typecheck",
    "jest --bail --findRelatedTests",
    /**
     * @param {string[]} files
     */
    async (files) =>
      `eslint --config .eslintrc.precommit.js --fix --format codeframe --max-warnings=0  ${await eslintFiles(
        files
      )}`,
    "prettier --write",
  ],
};
