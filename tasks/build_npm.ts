import { getLatestVersion } from "bump_version";
import { build, emptyDir } from "dnt";
import pack from "./package.json" assert { type: "json" };

const targetDir = "./build/npm";

await emptyDir(targetDir);

try {
  await build({
    entryPoints: [{ name: ".", path: "./functions.ts" }],
    outDir: targetDir,
    shims: { deno: false },
    package: { ...pack, ...{ version: await getLatestVersion() } },
    typeCheck: false,
    test: false,
  });
  await Deno.copyFile("LICENSE", targetDir + "/LICENSE");
  await Deno.copyFile("README.md", targetDir + "/README.md");
} catch (error) {
  console.error(error);
}

Deno.chdir(targetDir);

const command = new Deno.Command("npm", {
  args: ["publish", "--dry-run"],
});

const child = command.spawn();

const output = await child.output();

console.log({ output });
