import { sign } from "@mwm/sign";

export const signatures = [
  { "split :: s => s => ss": 1 },
  { "split ::      s => ss": 1 },
];

export const implementation = (a) => (b) => b.split(a);

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
 * const string = "one two three"
 * split(" ")(string) <=> string.split(" ") <=> ["one", "two", "three"]
 * ```
 */
export const split = sign(signatures, implementation);
