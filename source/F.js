import { sign } from "./util"

const F = () => false

sign("F :: a -> false")(F)

export { F, F as default }
