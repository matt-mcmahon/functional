/**
 * ```haskell
 * concat :: as => bs => [...as,...bs]
 * ```
 * -----------------------------------------------------------------------------
 *
 * Concatenates two iterable objects.
 *
 * @example
 * ```
 * const as = [0, 1, 2]
 * const bs = [3, 4]
 * concat(as)(bs) <=> [...as, ...bs]
 *
 * // With variadic types:
 *
 * const as = ["a", 1, { foo: "bar" } ]
 * const bs = ["b", { bar: "baz" } ]
 * concat(as)(bs) <=> ["a", 1, { foo: "bar" }, "b", { bar: "baz" } ]
 * ```
 */
export const concat = <AS extends readonly unknown[]>(
  as: AS,
) =>
  <BS extends readonly unknown[]>(
    bs: BS,
  ): [...AS, ...BS] => [...as, ...bs];
