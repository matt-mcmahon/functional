import { Unary, Curried } from "../types";

/**
 * ```
 * uncurry :: n => (a¹ => a² => ... => aⁿ => b) => (a¹, a², ..., aⁿ) => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a length, _n_, a _curried_ function has _n_ productions, and returns a
 * function that accepts _n_ arguments.
 *
 * ```
 * uncurry(3, a => b => c => a + b + c) <=> (a, b, c) => a + b + c
 *
 */
export declare function uncurry<A, B>(
  arity: number,
  curried: Curried<A, B>,
): (...as: A[]) => B;
