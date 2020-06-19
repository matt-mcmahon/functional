/**
 * ```
 * assoc :: k => a => b => {...b, k:a}
 * ```
 * -----------------------------------------------------------------------------
 *
 * Clones an object, associating the key, __k__, with value, __a__. For example:
 *
 * ```
 * b[k] = a <=> assoc(k, a, b).
 * ```
 *
 */
export declare function assoc<A>(
  key: string,
  a: A,
  b: object,
): { [key: string]: A };
