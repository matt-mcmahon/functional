import { getLatestVersion } from "bump_version";
import { build, emptyDir } from "dnt";
import pack from "./package.json" assert { type: "json" };

await emptyDir("./npm");

await build({
  entryPoints: [{ name: ".", path: "./functions.ts" }],
  outDir: "./npm",
  shims: { deno: false },
  package: { ...pack, ...{ version: await getLatestVersion() } },
  typeCheck: false,
  test: false,
});

await Deno.copyFile("LICENSE", "npm/LICENSE");
await Deno.copyFile("README.md", "npm/README.md");
