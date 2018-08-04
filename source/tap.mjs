const tap = fun => value => {
  fun(value)
  return value
}
tap.signature = 'tap :: (a -> *) -> a -> a'

export default { tap }
