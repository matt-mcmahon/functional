import { sign } from "./util"

const equals = a => b => a === b

sign("equals :: a -> b -> Boolean")(equals)

export { equals, equals as default }
