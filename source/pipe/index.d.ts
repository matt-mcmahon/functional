import { Unary } from "../types"

/**
 * ```
 * pipe :: ((a => b), (b => c), ..., (y => z)) => a => z
 * ```
 *
 * _Pipe_ is a _Variadic_ _Combinator_, that takes one or more _Unary_ __functions__ and a __value__. It _composes_ the functions in left-to-right order — evaluating the first function and applying it's result to the second, it's result to third, etc. — and returns the result of evaluating the final function. E.g.:
 *
 * ```
 * pipe(f, g, h)(v) <=> h(g(f(v)))
 * ```
 */
export declare function pipe<A, B>(...functions: Unary<A, B>[]): (value: A) => B
