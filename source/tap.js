import { sign } from "./util"

const tap = fun => value => {
  fun(value)
  return value
}

sign("tap :: (a -> *) -> a -> a")(tap)

export { tap, tap as default }
