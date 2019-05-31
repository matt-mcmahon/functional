import { sign } from "./util"

const prop = propName => object => object[propName]

sign("prop :: k -> { k:a } -> a")(prop)

export { prop, prop as default }
