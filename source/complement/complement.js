import { sign } from "@mwm/sign";

export const signatures = [
  "complement->predicate :: (a => Boolean) => a => Boolean",
  "complement            ::                   a => Boolean",
];

export const implementation = (predicate) => (value) => !predicate(value);

export const complement = sign(signatures, implementation);
