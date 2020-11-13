/**
 * ```
 * unless :: (a => boolean) => (a => b) => a => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Return `a => b` __unless__ the `a => boolean` is `true`, in that case return
 * `a`.
 */
export function when<A>(isOkay: (a: A) => boolean) {
  return <B>(mapAB: (a: A) => B) => {
    return (a: A): A | B => isOkay(a) ? mapAB(a) : a;
  };
}
