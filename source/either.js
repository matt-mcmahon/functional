import { sign } from "./util"

const either = firstPredicate => secondPredicate => value =>
  firstPredicate(value) || secondPredicate(value)

sign("either :: (a -> Boolean) -> (a -> Boolean) -> a -> Boolean")(either)

export { either, either as default }
