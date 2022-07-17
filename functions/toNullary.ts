/**
 * ```haskell
 * toNullary :: ((...as => b) => ()) => (...as) => () => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a function and the expected arguments to that function, and returns a
 * version of the function that doesn't expect any arguments.
 */
export function toNullary<AS extends unknown[], B>(
  v: (...as: AS) => B,
  ...as: AS
): () => B {
  return () => v(...as);
}
