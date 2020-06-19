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
export declare function unless<A, B>(
  predicate: (a: A) => Boolean,
  action: (a: A) => B,
  value: A,
): A | B;
