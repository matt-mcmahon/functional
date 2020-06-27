/**
 * ```
 * concat :: as => bs => [...as,...bs]
 * ```
 * -----------------------------------------------------------------------------
 *
 * Concatenates two iterable objects.
 *
 * ```
 * const as = [0, 1, 2]
 * const bs = [3, 4]
 * concat(as)(bs) <=> [...as, ...bs]
 * ```
 *
 * Or with variadic types:
 * ```
 * const as = ["a", 1, { foo: "bar" } ]
 * const bs = ["b", { bar: "baz" } ]
 * concat<unknown>(as)(bs) <=> ["a", 1, { foo: "bar" }, "b", { bar: "baz" } ]
 * ```
 *
 * @todo better types with Variadic Tuples in TypeScript 4
 */
export declare const concat: <A>(as: Iterable<A>) => (bs: Iterable<A>) => A[];
//# sourceMappingURL=concat.d.ts.map