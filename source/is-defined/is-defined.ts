/**
 * ```
 * isDefined :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns `false` if __a__ is `NaN`, `undefined`, or `null`, otherwise returns
 * `true`.
 *
 */
export const isDefined = <A>(a: A) => a === a && a !== undefined && a !== null;
