import { sign } from "./util"

const bind = method => object => (...args) => method.apply(object, args)

sign("bind :: f => a => f")(bind)

export { bind, bind as default }
