/**
 * ```
 * replace :: (s|r) => s => s => s
 * ```
 * -----------------------------------------------------------------------------
 *
 * Replaces parts of the __target__ _string_ that __match__ a given _string_ or
 * _RegExp_, with the __replaceWith__ _string_. For example:
 *
 * ```
 * replace('foo')('bar')('foo baz bix') <=> 'bar baz bix'
 * replace(/foo/gi)('bar')('foo baz foo') <=> 'bar baz bar'
 * ```
 *
 */
export declare function replace(
  match: string | RegExp,
  replaceWith: string,
  target: string,
): string;
