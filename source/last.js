import { sign } from "./util"

const last = values => values[values.length - 1]

sign("last :: as -> a")(last)

export { last, last as default }
