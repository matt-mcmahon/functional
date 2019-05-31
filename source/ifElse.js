import { sign } from "./util"

const ifElse = predicate => onTrue => onFalse => value =>
  predicate(value) ? onTrue(value) : onFalse(value)

sign("ifElse :: (a -> Boolean) -> (a -> a) -> (a -> a) -> a -> a")(ifElse)

export { ifElse, ifElse as default }
