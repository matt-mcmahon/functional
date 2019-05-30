import { sign } from "./util"

const init = as => as.slice(0, as.length - 1)

sign("init :: as -> as")(init)

export { init, init as default }
