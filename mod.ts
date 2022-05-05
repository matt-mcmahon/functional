/** The length of a tuple */
export type Length<T extends unknown[]> = T["length"];

/** Tail of tuple */
export type Tail<T extends unknown[]> = T extends [unknown, ...infer TailType]
  ? TailType
  : never;

/** The index of the last element in a tuple. */
export type LastIndex<AS extends unknown[]> = AS extends [infer A, ...infer BS]
  ? Length<BS>
  : never;

/** Type of the last item in a tuple. */
export type Last<AS extends unknown[]> = AS[LastIndex<AS>];

/** Type of the first item in a tuple. */
export type First<AS extends unknown[]> = AS[0];

export * as functions from "./functions.ts";
