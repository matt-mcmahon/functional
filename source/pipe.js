import { sign } from "./util"

const reducer = (value, fun) => fun(value)
const pipe = (...functions) => value => functions.reduce(reducer, value)

sign("pipe :: [(a -> b), (b -> c), ..., (y -> z)] -> (a -> z)")(pipe)

export { pipe, pipe as default }
