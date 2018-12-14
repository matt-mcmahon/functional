import { sign } from './util'

const T = () => true

sign('T :: a => true')(T)

export { T, T as default }
