/**
 * ```haskell
 * cap :: s => s
 * ```
 *
 * Capitalizes the first letter in a a given **word**. May not capitalize
 * certain unicode characters but shouldn't break them, either.
 * @param word word we want to capitalize
 * @returns capitalized word
 *
 * @example
 * ```js
 * cap("f") //=> "F"
 * cap("foo") //=> "Foo"
 * cap("foo bar") //=> "Foo bar"
 * cap(" foo") //=> " foo"
 * cap("") //=> ""
 * cap("😏") //=> "😏"
 * cap("👉🏿") //=> "👉🏿";
 * cap("𝑨𝑩𝑪") //=> "𝑨𝑩𝑪"
 * cap("𝑎𝑩𝑪") //=> "𝑎𝑩𝑪"
 * ```
 */
export const cap = (word: string): string =>
  word.replace(/^(.)/, (x) => x.toLocaleUpperCase());
