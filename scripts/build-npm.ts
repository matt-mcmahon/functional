import { getLatestVersion } from "https://deno.land/x/bump_version@v0.2.1/bump.ts";
import { build, emptyDir } from "https://deno.land/x/dnt@0.28.0/mod.ts";
import pack from "./package.json" assert { type: "json" };

await emptyDir("./npm");

await build({
  entryPoints: [{
    name: ".",
    path: "./functions.ts",
  }],
  outDir: "./npm",
  shims: { deno: false },
  package: { ...pack, ...{ version: await getLatestVersion() } },
  typeCheck: false,
  test: false,
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
