import { sign } from "./util"

const isDefined = value =>
  value === value && value !== undefined && value !== null

const defaultTo = defaultValue => value =>
  isDefined(value) ? value : defaultValue

sign("defaultTo :: a -> b -> a|b")(defaultTo)

export { defaultTo, defaultTo as default }
