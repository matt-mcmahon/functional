import { sign } from './util'
import { init, last } from '.'

const reduceRight = reducer => accumulator => (array = []) => {
  const value = last(array)
  const contuinuingCondition = array.length > 1
  if (contuinuingCondition === true) {
    const reducedArray = init(array)
    const reducedAccumulator = reducer(accumulator, value)
    return reduceRight(reducer)(reducedAccumulator)(reducedArray)
  } else {
    return reducer(accumulator, value)
  }
}

sign('reduceRight :: ((a, b) -> a) -> a -> [b] -> a')(reduceRight)

export default reduceRight
