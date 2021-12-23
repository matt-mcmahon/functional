import { clone } from "./clone"

/**
 * ```
 * assoc = k => b => a => {...a, k:b}
 * ```
 * -----------------------------------------------------------------------------
 *
 * Clones the object __a__, associating the key, __k__, with value, __b__.
 *
 * For example:
 *
 * ```
 * a[k] = b <=> assoc(k)(b)(a).
 * ```
 *
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const assoc =
  <K extends PropertyKey>(k: K) =>
  <B>(b: B) =>
  <A>(a: A): A | { K: B } =>
    Object.assign(clone(a), { [k]: b })
