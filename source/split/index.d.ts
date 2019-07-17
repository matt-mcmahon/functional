import { OrderedList } from "../types"

/**
 * ```
 * split->at   :: s => s => s
 * split->what ::      s => s
 * ```
 * -----------------------------------------------------------------------------
 *
 * splits a _string_ into one or more parts at the given _char_. For example:
 *
 * ```
 * const string = "one two three"
 * split(" ")(string) <=> string.split(" ") <=> ["one", "two", "three"]
 * ```
 */
export declare function split(arg: any): any
