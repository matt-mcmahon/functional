import { sign } from "./util"

const bind = method => object => (...args) => method.apply(object, args)

sign("bind :: (...as -> b) -> o -> (...as) -> b")(bind)

export { bind, bind as default }
