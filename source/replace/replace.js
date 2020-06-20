import { sign } from "@mwm/sign";

export const signatures = [
  "replace->what   :: (s|r) => s => s => s",
  "replace->with   ::          s => s => s",
  "replace->within ::               s => s",
];

export const implementation = (what) => (replacement) => (within) =>
  within.replace(what, replacement);

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
export const replace = sign(signatures, implementation);
