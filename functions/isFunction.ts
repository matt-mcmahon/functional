/**
 * ```haskell
 * isFunction :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is callable, `false` otherwise.
 * For example:
 *
 * ```
 * isFunction(function() {})    //=> true
 * isFunction(() => 'function') //=> true
 * const object = { method() {} }
 * isFunction(object)           //=> false
 * isFUnction(object.method)    //=> true
 * isFUnction(object.method())  //=> false
 * ```
 */
// deno-lint-ignore ban-types
export const isFunction = (a: unknown): a is Function =>
  typeof a === "function";
