import { sign } from "@mwm/sign";

export const signatures = [
  "ifElse->predicate :: (a => Boolean) => (a => b) => (a => c) => a => b|c",
  "ifElse->onTrue    ::                   (a => b) => (a => c) => a => b|c",
  "ifElse->onFalse   ::                               (a => c) => a => b|c",
  "ifElse->finally   ::                                           a => b|c",
];

export const implementation = (predicate) => (mapAB) => (mapAC) => (a) =>
  predicate(a) ? mapAB(a) : mapAC(a);

/**
 * ```
 * ifElse :: (a => Boolean) => (a => b) => (a => c) => a => b|c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a __predicate__, an __onTrue__ function, an  __onFalse__ function, and
 * a value, __a__. If `predicate(a)` is _truthy_, it returns `onTrue(a)`,
 * otherwise it returns `onFalse(a)`.
 */
export const ifElse = sign(signatures, implementation);
