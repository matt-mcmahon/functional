export type Compose<B, A> = {
  (b: B): A;
  after: <C>(f: (c: C) => B) => Compose<C, A>;
  call(a: A): B;
};

export type Pipe<A, B> = {
  (a: A): B;
  next: <C>(f: (b: B) => C) => Pipe<A, C>;
  call(a: A): B;
};

export type Mapper<A, B> = (a: A) => B;

/**
 * A unary function that returns either `true` or `false`.
 */
export interface Predicate<T> extends Unary<T, boolean> {
  (value: T): boolean;
}

/**
 * Function that operates on any arguments in context of `this`.
 */
export interface Method {
  (...args: unknown[]): unknown;
}

/**
 * A valid property name for an object.
 */
export type Key = string | symbol;

/**
 * A function that does not accept any arguments.
 */
export interface Nullary<T> {
  (): T;
}

/**
 * A function that accepts exactly one argument.
 */
export interface Unary<T, U> {
  (value: T): U;
}

/**
 * A function that accepts exactly two arguments.
 */
export interface Binary<T, U, V> {
  (firstValue: T, secondValue: U): V;
}

/**
 * ```
 * Variadic :: (a⁰, a¹, ...) => b
 * ```
 * -----------------------------------------------------------------------------
 * A function that accepts many arguments and returns a value.
 */
export interface Variadic<T extends unknown, U> {
  (...values: T[]): U;
}

/**
 * A __Binary__ function that accepts an accumulator and a value, and returns
 * an accumulator.
 */
export interface Reducer<T, U, V> extends Binary<T, U, V> {
  (accumulator: T, value: U): V;
}

export interface Iterable<T> {
  [Symbol.iterator]: { next: () => { done: boolean; value: T } };
}

export interface OrderedList<T> extends Iterable<T> {
  [n: number]: T;
}

/**
 * ```
 * Curried :: a => b|Curried
 * ```
 * -----------------------------------------------------------------------------
 * A function that accepts one argument, can return a value or a Curried
 * function.
 */
export interface Curried<T, U> extends Unary<T, U> {
  (argument: unknown): Curried<T, U> | U;
}

/**
 * ```
 * Mappable :: (a -> b) => M a => M b
 * ```
 * -----------------------------------------------------------------------------
 * Takes a function that _maps_ values of one type into values that may be of a
 * different type, a __Mappable__, applies the mapping function to it, and
 * returns a new __Mappable__.
 *
 */
export interface Mappable<A> {
  map: <B>(f: Mapper<A, B>) => Mappable<B>;
}