/**
 * ```
 * split->at   :: s => s => ss
 * split->what ::      s => ss
 * ```
 * -----------------------------------------------------------------------------
 *
 * splits a _string_ into one or more parts at the given _char_. For example:
 *
 * ```
 * const s = "one two three"
 * split(" ")(s) <=> s.split(" ") <=> ["one", "two", "three"]
 * ```
 */
export declare const split: (separator?: string | RegExp | undefined, limit?: number | undefined) => (source: string) => string[];
//# sourceMappingURL=split.d.ts.map