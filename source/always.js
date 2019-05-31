import { sign } from "./util"

const always = value => () => value

sign("always :: a -> * -> a")(always)

export { always, always as default }
