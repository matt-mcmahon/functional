import { sign } from './util'

const both = firstPredicate => secondPredicate => value =>
  firstPredicate(value) && secondPredicate(value)

sign('(*… → Boolean) → (*… → Boolean) → (*… → Boolean)')(both)

export { both, both as default }
