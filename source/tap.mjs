const tap = fun => value => {
  fun(value)
  return value
}
tap.signature = 'tap :: (a -> *) -> a -> a'

export { tap, tap as default }
