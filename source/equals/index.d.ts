import { Predicate } from "../types"
/**
 * __equals__ creates a __Predicate__ that compares it's value to the value, _a_, and returns `a === value`.
 */
export declare function equals<A, B>(expected: A): Predicate<A>
