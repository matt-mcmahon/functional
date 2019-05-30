import { sign } from "./util"

const complement = predicate => value => !predicate(value)

sign("complement :: (*… → *) → (*… → Boolean)")(complement)

export { complement, complement as default }
