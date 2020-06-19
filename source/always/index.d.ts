/**
 * ```
 * always :: a => * => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a function that always returns _value_, ignoring any arguments.
 */
export declare function always<A>(returns: A): () => A;
