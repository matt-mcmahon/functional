/**
 * ```
 * cap :: s => s
 * ```
 * @param {string} word word we want to capitalize
 */
export function cap(word: string): string {
  return typeof word === "string" && word.length > 0
    ? word[0].toLocaleUpperCase() + word.substr(1)
    : "";
}
