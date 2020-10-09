/**
 * ```
 * always :: a => * => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a function that always returns _a_, ignoring any arguments.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const always = <A>(a: A) => (...bs: unknown[]): A => a
