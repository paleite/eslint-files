import { ESLint } from "eslint";
const cli = new ESLint();

const eslintFiles = async (files: string[]) =>
  (
    await Promise.all(
      files.map(async (file) => !(await cli.isPathIgnored(file)) && file)
    )
  )
    .filter(Boolean)
    .join(" ");

export { eslintFiles };
