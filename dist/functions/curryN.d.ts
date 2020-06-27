/**
 * ```
 * curryN :: n => ((a¹, a², ..., aⁿ) => b) =>  a¹ => a²... => aⁿ => b
 * ```
 * -----------------------------------------------------------------------------
 * Converts a function that accepts an arity, __n__, number of arguments into a
 * series of _Unary_ functions that produce the same final value.
 *
 * @todo add support for Variadic Tuples in TypeScript 4
 */
export declare const curryN: (n: number) => <F extends Function>(f: F) => (...as: unknown[]) => any;
