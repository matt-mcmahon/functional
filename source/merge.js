import { sign } from "./util"

const merge = first => second => Object.assign({}, first, second)

sign("sign :: a => b => a ∪ b")(merge)

export { merge, merge as default }
