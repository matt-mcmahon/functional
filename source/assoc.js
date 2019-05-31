import { sign } from "./util"
import { clone } from "."

const assoc = key => value => object =>
  Object.assign(clone(object), { [key]: value })

sign("assoc :: k -> a -> {k:*} -> {k:a}")(assoc)

export { assoc, assoc as default }
