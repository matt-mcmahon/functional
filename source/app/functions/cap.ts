/**
 * ```haskell
 * cap :: s => s
 * ```
 *
 * Capitalizes the first character in a a given **word**.
 *
 * @param word word we want to capitalize
 * @returns capitalized word
 *
 * @example
 * ```js
 * cap('f') //=> 'F'
 * cap('foo') //=> 'Foo'
 * cap('foo bar') //=> 'Foo bar'
 * cap(' foo') //=> ' foo'
 * cap('') //=> ''
 * ```
 */
export const cap = (word: string): string =>
  typeof word === "string" && word.length > 0
    ? word[0].toLocaleUpperCase() + word.substr(1)
    : word
