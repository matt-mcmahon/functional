import { sign } from './util'

const isNil = value => value === null || value === undefined

sign('isNil :: a -> Boolean')(isNil)

export { isNil, isNil as default }
