import { readdir as rd } from "fs"
import { promisify } from "util"

export const readdir = promisify(rd)
