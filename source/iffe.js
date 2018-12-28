import { sign } from './util'

const iffe = (fun, ...args) => fun(...args)

sign('iffe :: f, [a] => f')(iffe)

export { iffe, iffe as default }
