import { sign } from './util'

const head = as => as[0]

sign('head :: as -> a')(head)

export { head, head as default }
