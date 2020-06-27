/**
 * ```
 * equals :: a => b => Boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * __equals__ creates a _Predicate_ that compares the argument, __a__, to the
 * argument, __b__, using the strict-equality operator, i.e.:
 *
 * ```
 * equals(a, b) <=> a === b
 * ```
 *
 */
export declare const equals: (a: unknown) => (b: unknown) => boolean;
//# sourceMappingURL=equals.d.ts.map