import { sign } from './util'

const equal = a => b => a === b

sign('equal :: a => b => boolean')(equal)

export { equal, equal as default }
