/**
 * ```haskell
 * merge :: a => b => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Performs a shallow merge of two objects. Returns a new object. Properties in __a__ will be overwritten by __b__.
 */
export const merge = <A>(a: A) => <B>(b: B): A & B => Object.assign({}, a, b);
