import { sign } from './util'
import { tail, head } from '.'

const reduce = reducer => accumulator => (array = []) => {
  const value = head(array)
  const contuinuingCondition = array.length > 0

  if (contuinuingCondition === true) {
    const reducedArray = tail(array)
    const reducedAccumulator = reducer(accumulator, value)
    return reduce(reducer)(reducedAccumulator)(reducedArray)
  } else {
    return accumulator
  }
}

sign('reduceRight :: ((a, b) -> a) -> a -> [b] -> a')(reduce)

export { reduce, reduce as default }
