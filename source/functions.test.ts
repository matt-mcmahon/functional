import { describe } from "@mwm/sign"
import * as functional from "./functions"

import { readdir } from "fs"
import { promisify } from "util"

const listDir = promisify(readdir)

const removeExtension = (fileNames: string[]) =>
  fileNames.map((file) => file.replace(/.\w+$/, ""))

const filterTestFiles = (fileNames: string[]) =>
  fileNames.filter(
    (name) => !name.includes(".test.") && !name.includes("index")
  )

const sortFiles = (files: string[]) => files.sort()

const getModuleList = () =>
  listDir("./source/functions")
    .then(filterTestFiles)
    .then(removeExtension)
    .then(sortFiles)

describe("index", async ({ assert }) => {
  const actual = Object.keys(functional).sort()
  const expected = await getModuleList()

  assert({
    actual,
    expected,
    given: "actual module exports",
    should: "include all public exports",
  })
})
