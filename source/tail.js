import { sign } from "./util"

const tail = as => as.slice(1)

sign("tail :: as -> as")(tail)

export { tail, tail as default }
