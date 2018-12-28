import { sign } from './util'

const last = as => as[as.length - 1]

sign('last :: as -> a')(last)

export default last
