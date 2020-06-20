import { clone } from "../clone/clone.ts";

/**
 * ```
 * assoc = (k, i?) => a => b => {...b, [k]:a}
 * ```
 * -----------------------------------------------------------------------------
 *
 * Clones the object __b__, associating the key, __k__, with value, __b__. 
 * Accepts an optional type-instance example, __i__, which is used to infer 
 * typings for the final object.
 * 
 * For example:
 *
 * ```
 * b[k] = a <=> assoc(k, a, b).
 * ```
 *
 */
export const assoc = <I, K extends keyof I>(key: K | number, i?: I) =>
  <B extends I[K]>(b: B) =>
    <A extends I>(a: A) => Object.assign(clone(a), { [key]: b }) as I;
