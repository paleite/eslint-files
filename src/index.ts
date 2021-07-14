import { ESLint } from "eslint";
const cli = new ESLint();

const eslintignored = async (files: string[]) =>
  (
    await Promise.all(
      files.map(async (file) => !(await cli.isPathIgnored(file)) && file)
    )
  )
    .filter(Boolean)
    .join(" ");

export { eslintignored };
