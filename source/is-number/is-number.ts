/**
 * ```
 * isNumber :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns `true` if __a__ has type `number`.
 *
 */
export const isNumber = <A>(a: A) => typeof a === "number";
