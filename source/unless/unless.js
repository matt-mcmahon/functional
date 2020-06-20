import { sign } from "@mwm/sign";

export const signatures = [
  "unless->predicate :: (a => boolean) => (a => b) => a => a|b",
  "unless->action    ::                   (a => b) => a => a|b",
  "unless            ::                               a => a|b",
];

export const implementation = (predicate) => (mapAB) => (a) =>
  predicate(a) ? a : mapAB(a);

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
export const unless = sign(signatures, implementation);
