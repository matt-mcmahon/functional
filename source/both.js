import { sign } from "./util"

const both = firstPredicate => secondPredicate => value =>
  firstPredicate(value) && secondPredicate(value)

sign("(a -> Boolean) -> (a -> Boolean) -> a -> Boolean")(both)

export { both, both as default }
