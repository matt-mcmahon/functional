import { Unary } from "../types"

/**
 * ```
 * pipeV :: a => ((a => b), (b => c), ..., (y => z)) => z
 * ```
 *
 * _PipeV_ is a _Variadic_ _Combinator_, that takes a __value__ and one or more _Unary_ __functions__. It _composes_ the functions in left-to-right order — evaluating the first function and applying it's result to the second, it's result to third, etc. — and returns the result of evaluating the final function. E.g.:
 *
 * ```
 * pipeV(v)(f, g, h) <=> h(g(f(v)))
 * ```
 */
export declare function pipeV<A, B>(
  value: A
): (...functions: Unary<A, B>[]) => B
