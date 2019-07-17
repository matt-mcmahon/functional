import { Unary } from "../types"
/**
 * The __either__ combinator creates a __Unary__ from two functions that
 * returns the result of calling the _first_ function with some _value_, if
 * `first(value)` is _truthy_, otherwise it returns the result of calling the
 * _second_ function.
 */
export declare function either<A, B, C>(
  first: Unary<A, B>
): (second: Unary<A, C>) => (value: A) => B | C
