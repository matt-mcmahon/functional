/**
 * ```
 * isDefined :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns `false` if a is `undefined` or `null`, otherwise return `true`.
 *
 */
export declare const isDefined: <A>(a: A) => a is Exclude<A, null> & Exclude<A, undefined>;
//# sourceMappingURL=isDefined.d.ts.map