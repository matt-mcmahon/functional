/**
 * ```haskell
 * when :: (a => boolean) => (a => b) => a => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Return `a => b` __when__ the `a => boolean` is `true`, otherwise return `a`.
 */
export const when =
  <A>(is: (x: unknown) => x is A) =>
  <B>(mapAB: (a: A) => B) =>
  <C>(x: C | A): B | C => is(x) ? mapAB(x) : x;
