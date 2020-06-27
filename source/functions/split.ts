interface Splittable<A> {
  split(delimiter: A): A[]
}

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
export const split = (separator?: string | RegExp, limit?: number) => (
  source: string
) =>
  separator == undefined
    ? [source]
    : separator === ""
    ? Array.from(source)
    : source.split(separator)
