/**
 * A unary function that returns either `true` or `false`.
 */
export type Predicate = (value: any) => boolean

/**
 * Function that operates on any arguments in context of `this`.
 */
export type Method = (...args: any[]) => any

export type Key = string | symbol

/**
 * A function that accepts exactly one argument.
 */
export type Unary = (value: any) => any

/**
 * A function that accepts exactly two arguments.
 */
export type Binary = (firstValue: any, secondValue: any) => any

/**
 * A function that accepts many arguments
 */
export type Variadic = (...values: any[]) => any

/**
 * A binary function that accepts an accumulator and a value, and returns an
 * accumulator.
 */
export type Reducer = (accumulator: any, value: any) => any
