/**
 * ```
 * prop :: k => a.k => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the value of the given _property_ for the object.
 *
 */
export const prop = (k: string | number | symbol) =>
  (a: object) => Reflect.get(a, k);
