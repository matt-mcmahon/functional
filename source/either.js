import { sign } from "./util"

const either = firstPredicate => secondPredicate => value =>
  firstPredicate(value) || secondPredicate(value)

sign("either :: (*… → Boolean) → (*… → Boolean) → (*… → Boolean)")(either)

export { either, either as default }
