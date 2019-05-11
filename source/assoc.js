import { sign } from './util'
import { clone } from '.'

const assoc = key => value => object =>
  Object.assign(clone(object), { [key]: value })

sign('assoc :: String → a → {k: v} → {k: v}')(assoc)

export { assoc, assoc as default }
