import { clone } from "./clone";

/**
 * ```haskell
 * assoc :: k => b => a => {...a, k: b}
 * ```
 * -----------------------------------------------------------------------------
 *
 * Clones the object __a__, associating the key, __k__, with value, __b__.
 *
 * @param k object key
 * @param b value to assign, `{ ...a, [k]: b }`
 * @param a object to clone
 *
 * @example
 * ```
 * a[k] = b <=> assoc(k)(b)(a)
 * ```
 */
export const assoc = <K extends PropertyKey>(k: K) =>
  <B>(b: B) => <A>(a: A): A | { K: B } => Object.assign(clone(a), { [k]: b });
