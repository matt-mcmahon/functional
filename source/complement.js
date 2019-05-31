import { sign } from "./util"

const complement = predicate => value => !predicate(value)

sign("complement :: (a -> Boolean) -> a -> Boolean")(complement)

export { complement, complement as default }
