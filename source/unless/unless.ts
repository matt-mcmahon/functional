/**
 * ```
 * unless->predicate :: (a => boolean) => (a => b) => a => a|b
 * unless->action    ::                   (a => b) => a => a|b
 * unless->value     ::                               a => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Call the _action_ function __unless__ the _predicate_ evaluates to `true`
 * when applied the value, _a_.
 *
 */
export const unless = <A>(predicate: (a: A) => boolean) =>
  <B>(mapAB: (a: A) => B) =>
    (a: A) => {
      if (predicate(a)) return a;
      else return mapAB(a);
    };
