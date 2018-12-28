import { sign } from './util'

const iffe = fun => (...args) => fun(...args)

sign('iffe :: (as -> (* -> *)) -> as -> (* -> *)')(iffe)

export { iffe, iffe as default }
