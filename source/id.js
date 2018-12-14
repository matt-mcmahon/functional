import { sign } from './util'

const id = value => () => value

sign('id :: a => a')(id)

export { id, id as default }
