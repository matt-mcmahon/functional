/**
 * ```haskell
 * unless :: (a => boolean) => (a => b) => a => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Return `a => b` __unless__ the `a => boolean` is `true`, in that case return
 * `a`.
 */
export const unless =
  <X, A extends X>(xIsA: (x: X) => x is A) =>
  <B>(mapXB: (x: X) => B) =>
  (x: X): A | B => xIsA(x) ? x : mapXB(x);
