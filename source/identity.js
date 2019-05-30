import { sign } from "./util"

const identity = value => value

sign("identity :: a => a")(identity)

export { identity, identity as default }
