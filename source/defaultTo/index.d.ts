/**
 * If _nullableValue_ is `null` or `undefined`, return the _defaultValue_,
 * otherwise return the _nullableValue_.
 */
export declare function defaultTo<T, U>(
  defaultValue: T
): (nullableValue: U) => T | U
