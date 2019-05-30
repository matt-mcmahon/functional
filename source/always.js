import { sign } from "./util"

const always = value => () => value

sign("always :: a => (b => a)")(always)

export { always, always as default }
