/**
 * The length of a tuple
 */
export type Length<T extends unknown[]> = T["length"]

/**
 * The index of the last element in a tuple.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type LastIndex<AS extends unknown[]> = AS extends [infer A, ...infer BS]
  ? Length<BS>
  : never

/**
 * Gets the type of the last item in a tuple.
 */
export type Last<AS extends unknown[]> = AS[LastIndex<AS>]

/**
 * Gets the type of the first item in a tuple.
 */
export type First<AS extends unknown[]> = AS[0]
