import { sign } from "./util"

const iffe = fun => (...args) => fun(...args)

sign("iffe :: (* -> *) -> as -> *")(iffe)

export { iffe, iffe as default }
