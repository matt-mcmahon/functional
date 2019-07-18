/**
 * ```
 * equals :: a => b => Boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * __equals__ creates a _Predicate_ that compares the arguments __a__, to the
 * argument __b__ using the strict-equality operator, i.e.:
 *
 * ```
 * equals(a, b) <=> a === b
 * ```
 *
 */
export declare function equals<A, B>(a: A, b: B): boolean
