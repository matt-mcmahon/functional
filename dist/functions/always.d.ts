/**
 * ```
 * always :: a => * => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a function that always returns _a_, ignoring any arguments.
 */
export declare const always: <A>(a: A) => (...bs: unknown[]) => A;
//# sourceMappingURL=always.d.ts.map