import { sign } from "./util"

const head = values => values[0]

sign("head :: as -> a")(head)

export { head, head as default }
