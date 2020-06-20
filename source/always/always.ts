/**
 * ```
 * always :: a => * => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a function that always returns _a_, ignoring any arguments.
 */
export const always = <A>(a: A) => (...bs: unknown[]) => a;
