/**
 * ```haskell
 * isObject :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is callable, `false` otherwise.
 * For example:
 *
 * ```
 * isObject(function() {})    //=> true
 * isObject(() => 'function') //=> true
 * const object = { method() {} }
 * isObject(object)           //=> false
 * isObject(object.method)    //=> true
 * isObject(object.method())  //=> false
 * ```
 */
// deno-lint-ignore ban-types
export const isObject = (a: unknown): a is object => typeof a === "object";
