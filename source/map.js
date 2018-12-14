import { sign } from './util'

const map = fun => as => as.map(fun)

sign('map :: (a -> b) -> as -> bs')(map)

export { map, map as default }
