import { sign } from "./util"

const merge = first => second => Object.assign({}, first, second)

sign("merge :: a -> b -> c")(merge)

export { merge, merge as default }
