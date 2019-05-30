import { sign } from "./util"

const has = propertyName => object => propertyName in object

sign("has :: a => Boolean")(has)

export { has, has as default }
