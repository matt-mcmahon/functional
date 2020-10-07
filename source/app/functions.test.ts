import { describe } from "../lib/describe.ts";
import { readdir } from "../lib/readdir.ts";

import * as functional from "./functions.ts";

const removeExtension = (fileNames: string[]) =>
  fileNames.map((file) => file.replace(/.\w+$/, ""));

const filterTestFiles = (fileNames: string[]) =>
  fileNames.filter(
    (name) => !name.includes(".test.") && !name.includes("index"),
  );

const sortFiles = (files: string[]) => files.sort();

const getModuleList = () =>
  readdir("./source/app/functions")
    .then(filterTestFiles)
    .then(removeExtension)
    .then(sortFiles)
    .catch((reason) => {
      throw reason;
    });

describe("index", async ({ assert }) => {
  const actual = Object.keys(functional).sort();
  const expected = await getModuleList();

  assert({
    actual,
    expected,
    given: "actual module exports",
    should: "include all public exports",
  });
});
