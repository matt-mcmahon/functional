import { sign } from "./util"

const isEmpty = value =>
  Array.isArray(value) && value.length === 0
    ? true
    : typeof value === "string" && value.length === 0
    ? true
    : value === null || value === undefined
    ? false
    : typeof value === "object" && Object.keys(value).length === 0
    ? true
    : false

sign("isEmpty :: a -> Boolean")(isEmpty)

export { isEmpty, isEmpty as default }
