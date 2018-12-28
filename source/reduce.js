import { sign } from './util'
import { head, tail } from '.'

const reduce = reducer => accumulator => (array = []) => {
  if (array.length > 1) {
    return reduce(reducer)(reducer(accumulator, head(array)))(tail(array))
  } else {
    return reducer(accumulator, array[0])
  }
}

sign('reduce :: ((a, b) -> a) -> a -> [b] -> a')(reduce)

export default reduce
