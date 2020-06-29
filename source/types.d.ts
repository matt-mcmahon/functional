export type Compose<B, A> = {
  (b: B): A
  from: <C>(f: (c: C) => B) => Compose<C, A>
  call(a: A): B
}

export type Pipe<A, B> = {
  (a: A): B
  then: <C>(f: (b: B) => C) => Pipe<A, C>
  invoke(a: A): B
}

// From: https://dev.to/kjleitz/comment/gb5d
// Keegan Leitz (https://dev.to/kjleitz)

/**
 * Gets the length of an array / tuple type. For example:
 *
 * ```
 * type FooLength = GetLength<[string, number, boolean]>;
 * //=> 3
 * ```
 */
export type GetLength<T extends any[]> = T extends { length: infer L }
  ? L
  : never

/**
 * Drops the first element of a tuple. Example:
 * ```
 *   type Foo = GetTail<[string, number, boolean]>;
 *   //=> [number, boolean]
 * ```
 */
export type GetTail<T extends any[]> = ((...args: T) => any) extends (
  arg: any,
  ...rest: infer U
) => any
  ? U
  : T

/**
 * Gets the type of the last element of a tuple. Example:
 * ```
 *   type Foo = LastInTuple<[string, number, boolean]>;
 *   //=> boolean
 *
 *   function lastArg<T extends any[]>(...args: T): LastInTuple<T> {
 *     return args[args.length - 1];
 *   }
 *
 *   const bar = lastArg(1);
 *   type Bar = typeof bar;
 *   //=> number
 *
 *   const baz = lastArg(1, true, "hey", 123, 1, 2, 3, 4, 5, 6, 7, -1, false);
 *   type Baz = typeof baz;
 *   //=> boolean
 * ```
 */
export type GetLast<T extends any[]> = T[GetLength<GetTail<T>>]
