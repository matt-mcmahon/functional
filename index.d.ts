/**
 * A unary function that returns either `true` or `false`.
 */
type Predicate = (value: any) => boolean

/**
 * Function that operates on any arguments in context of `this`.
 */
type Method = (...args: any[]) => any

type Key = string | symbol

/**
 * A function that accepts exactly one argument.
 */
type Unary = (value: any) => any

/**
 * A function that accepts exactly two arguments.
 */
type Binary = (firstValue: any, secondValue: any) => any

/**
 * A binary function that accepts an accumulator and a value, and returns an
 * accumulator.
 */
type Reducer = (accumulator: any, value: any) => any

interface Mappable {
  map: (fun: Unary) => Mappable
}

declare module '@mwm/functional' {
  /**
   * Creates a function that always returns _value_, ignoring any arguments.
   */
  export const always: (value: any) => () => any

  /**
   * Creates a clone of object, _a_, with the additional property
   * `a[key] = value`.
   */
  export const assoc: (key: Key) => (value: any) => (a: object) => object

  /**
   * Creates a new __Function__ that binds _method_'s _this_ context to the
   * _object_.
   */
  export const bind: (method: Method) => (object: object) => Function

  /**
   * Returns the result of calling the first Predicate if
   * `first(value) == false`, otherwise returns `andSecond(value)`.
   */
  export const both: (first: Predicate) => (andSecond: Predicate) => Predicate

  /**
   * Returns a deep-clone of it's argument, _a_.
   */
  export const clone: (a: any) => any

  /**
   * Creates a function that will return the complement of the given predicate,
   * e.g. `complement(T)` creates a function athat always returns `false`.
   */
  export const complement: (predicate: Predicate) => Predicate

  /**
   * Returns the composition, right-to-left, of the _functions_ with with the
   * given _value_, e.g.:
   * `compose(h,g,f)(v) => h(g(f(v)))`
   */
  export const compose: (...functions: Unary[]) => (value: any) => any

  /**
   * If _nullableValue_ is `null` or `undefined`, return the _defaultValue_,
   * otherwise return the _nullableValue_.
   */
  export const defaultTo: (defaultValue: any) => (nullableValue: any) => any

  /**
   * returns the result of calling the first Predicate if
   * `first(value) == true`, otherwise returns `orSecond(value)`.
   */
  export const either: (first: Predicate) => (orSecond: Predicate) => Predicate

  /**
   * compares using strict-equality, `a === b`
   */
  export const equals: (a: any) => (b: any) => boolean

  /**
   * A function that always returns `false`.
   */
  export const F: () => false

  /**
   * Filters a mappable using the filter function.
   */
  export const filter: (filterFunction: Predicate) => (as: Mappable) => Mappable

  /**
   * Creates a __Predicate__ that returns `true` if it's argument has a
   * property named, _propertyName_, otherwise returns `false`.
   */
  export const has: (propertyName: Key) => Predicate

  /**
   * returns the first element in an array.
   */
  export const head: (as: any[]) => any

  /**
   * Returns it's argument, unmodified.
   */
  export const identity: (value: any) => any

  /**
   * Takes a Predicate, an _onTrue_ function that it will execute if
   * `Predicate(value) == true`, an _onFalse_ function it will execute if
   * `Predicate(value) == false`, and a _value_ that is the argument to these
   * functions.
   */
  export const ifElse: (
    predicate: Predicate
  ) => (onTrue: Unary) => (onFalse: Unary) => (value: any) => any

  /**
   * Takes a function, any number of arguments, and immediately invokes that
   * function, passing in those arguments, returning the result, if anything.
   */
  export const iffe: (fun: Function) => (...args: any[]) => any

  /**
   * Returns all but the last element of an array.
   */
  export const init: (as: any[]) => any[]

  /**
   * __Predicate__ that returns `true` if it's argument is an empty value for
   * it's type, `false` otherwise.
   */
  export const isEmpty: Predicate

  /**
   * __Predicate__ that returns `true` if it's argument is `null` or
   * `undefined`, `false` otherwise.
   */
  export const isNil: Predicate

  /**
   * Returns the last element in an array.
   */
  export const last: (as: any[]) => any

  /**
   * Takes a __Unary__ function and a __Mappable__, applies the function to
   * each of the Mappable's values. Returns a Mappable of the same type.
   */
  export const map: (fun: Unary) => (as: Mappable) => Mappable

  /**
   * Performs a shallow merge of two objects.
   */
  export const merge: (first: object) => (second: object) => object
  /**
   * Returns the composition, left-to-right, of the _functions_ with with the
   * given _value_, e.g.:
   * `pipe(f,g,h)(v) => h(g(f(v)))`
   */
  export const pipe: (...functions: Unary[]) => (value: any) => any

  /**
   * Returns the value for the object, of the given _propName_
   */
  export const prop: (propName: Key) => (object: object) => any

  /**
   * Reduces a list, from left-to-right, to a single value by calling a
   * _reducer_ function for each value, e.g. `reducer(accumulator, value)`,
   * and passing the result as the accumulator to the next iteration.
   */
  export const reduce: (
    reducingFunction: Reducer
  ) => (accumulator: any) => (as: any[]) => any

  /**
   * Reduces a list, from right-to-left, to a single value by calling a
   * _reducer_ function for each value, e.g. `reducer(accumulator, value)`,
   * and passing the result as the accumulator to the next iteration.
   */
  export const reduceRight: (
    reducingFunction: Reducer
  ) => (accumulator: any) => (as: any[]) => any

  /**
   * Sorts a list by applying the given sorting function.
   */
  export const sort: (
    sortingFunction: (a: any, b: any) => number
  ) => (as: any[]) => any[]

  /**
   * A function that always returns `true`.
   */
  export const T: () => true

  /**
   * Returns a portion of the list not including the first element.
   */
  export const tail: (as: any[]) => any

  /**
   * Executes a given _fun_&shy;ction with the supplied _value_ and returns the
   * original value.
   */
  export const tap: (fun: (value: any) => void) => (value: any) => any
}
