import { sign } from "./util"

const filter = predicate => as => as.filter(predicate)

sign("filter :: (a -> boolean) -> as -> as")(filter)

export { filter, filter as default }
