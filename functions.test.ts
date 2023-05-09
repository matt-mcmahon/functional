import { assertEquals } from "testing";
import * as functional from "./functions.ts";

const __dirname = new URL(".", import.meta.url).pathname;

const collectFileNames = async (path: string, paths: string[] = []) => {
  for await (const dirEntry of Deno.readDir(path)) {
    if (dirEntry.isFile) {
      paths.push(dirEntry.name);
    } else if (dirEntry.isDirectory) {
      collectFileNames(dirEntry.name, paths);
    }
  }
  return paths;
};

const filterTestFiles = (fileNames: string[]) =>
  fileNames.filter((n) => !(n.includes(".test.") || n.includes("index")));

const sortFiles = (files: string[]) => files.sort();

const getModuleList = () =>
  collectFileNames(__dirname + "./functions")
    .then(filterTestFiles)
    .then(sortFiles)
    .catch((reason) => {
      throw reason;
    });

Deno.test("functions.ts", async () => {
  assertEquals(
    Object.keys(functional)
      .map((file) => file + ".ts")
      .sort(),
    await getModuleList(),
  );
});
