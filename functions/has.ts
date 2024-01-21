/**
 * ```haskell
 * has :: (k, (a) => boolean) => a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a _Predicate_ that returns `true` if it's argument has an owned
 * property, __k__, otherwise returns `false`. Unlike the `in` operator, __has__
 * will not check the prototype chain.
 *
 * @example
 * ```
 * 'toString' in {}     //=> true
 * has('toString')({})  //=> false
 * ```
 *
 * Narrows type of `a[k]` when provided a type-guard, __is__.
 * @example
 * ```
 * has('foo', isString)({ foo: 'foo' }) //=> true
 * has('foo', isString)({ foo: 7 }) //=> false
 * ```
 *
 * @param __k__ the name or symbol of the property to check for
 * @param __is__ a type-guard function that narrows the type of `a[k]` to a specific type
 * @param __a__ the object to check for ownership of the property
 */
export function has<T, K extends PropertyKey>(
  k: K,
  is?: (x: unknown) => x is T,
) {
  return (
    a: unknown,
  ): a is {
    [P in K]: T;
  } => hasK(k, a) && (is ? is(a[k]) : true);
}

function hasK<K extends PropertyKey, T>(
  k: K,
  a: unknown,
): a is {
  [P in K]: T;
} {
  return a != null && Object.hasOwn(a, k);
}
