import { sign } from "./util"

const prop = propName => object => object[propName]

sign("prop :: s -> { s: a } -> a")(prop)

export { prop, prop as default }
