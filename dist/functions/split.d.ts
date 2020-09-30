/**
 * ```
 * split->at   :: (s, n) => s => ss
 * split->what ::           s => ss
 * ```
 * -----------------------------------------------------------------------------
 *
 * Safely split a _string_ into one or more parts by the given  __`separator`__
 * string or regular expression:
 *
 * ```
 * const s = "one two three"
 * split(" ")(s) <=> s.split(" ") <=> ["one", "two", "three"]
 * ```
 *
 * while respecting surrogate pairs:
 *
 * ```
 * split("")("𝟘𝟙𝟚𝟛") <=> ["𝟘", "𝟙", "𝟚", "𝟛"] !=> "𝟘𝟙𝟚𝟛".split("")
 * ```
 *
 * or putting a __`limit`__ on the number of elements returned:
 *
 * ```
 * split(" ", 2)(s) <=> ["one", "two"]
 * split(" ", 9)(s) <=> ["one", "two", "three"]
 * ```
 */
export declare const split: (separator?: string | RegExp | undefined, limit?: number | undefined) => (source: string) => string[];
