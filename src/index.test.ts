import { eslintignored } from "./index";

describe("eslintignored", () => {
  it("should keep files that are not ignored", async () => {
    expect(
      await eslintignored(["test.js", "test.jsx", "test.ts", "test.tsx"])
    ).toMatchInlineSnapshot(`"test.js test.jsx test.ts test.tsx"`);
  });

  it("should omit files that are ignored", async () => {
    expect(
      await eslintignored([
        "src/index.ts",
        // dist is in .eslintignore
        "dist/index.js",
        "src/index.test.ts",
      ])
    ).toMatchInlineSnapshot(`"src/index.ts src/index.test.ts"`);
  });
});
