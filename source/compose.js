import { sign } from "./util"

const reducer = (value, fun) => fun(value)
const compose = (...functions) => value => functions.reduceRight(reducer, value)

sign("compose :: [(y -> z), ..., (b -> c), (a -> b)] -> a -> z")(compose)

export { compose, compose as default }
