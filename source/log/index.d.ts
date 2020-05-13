/**
 * ```
 * log :: s -> a -> a
 * ```
 * -----------------------------------------------------------------------------
 * Takes a string, a _value_, logs the string and the value, and then returns
 * the _value_.
 */
export function log<A>(m: string, value: A): A
