import { sign } from "@mwm/sign";

export const signatures = [
  "ifElse->predicate :: (a => Boolean) => (a => b) => (a => c) => a => b|c",
  "ifElse->onTrue    ::                   (a => b) => (a => c) => a => b|c",
  "ifElse->onFalse   ::                               (a => c) => a => b|c",
  "ifElse->finally   ::                                           a => b|c",
];

export const implementation = (predicate) =>
  (mapAB) => (mapAC) => (a) => predicate(a) ? mapAB(a) : mapAC(a);

export const ifElse = sign(signatures, implementation);
