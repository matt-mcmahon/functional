import { sign } from "./util"

const filter = predicate => values => values.filter(predicate)

sign("filter :: (a -> Boolean) -> as -> as")(filter)

export { filter, filter as default }
