/**
 * ```haskell
 * unless :: (a => boolean) => (a => b) => a => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Return `a => b` __unless__ the `a => boolean` is `true`, in that case return
 * `a`.
 */
export const when =
  <X, A extends X>(xIsA: (x: X) => x is A) =>
  <B>(mapAB: (a: A) => B) =>
  (x: X): B | X => xIsA(x) ? mapAB(x) : x;
