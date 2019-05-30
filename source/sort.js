import { sign } from "./util"

const sort = fun => as => [...as].sort(fun)

sign("sort :: (a -> n) -> as -> as")(sort)

export { sort, sort as default }
