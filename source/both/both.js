import { sign } from "@mwm/sign";

export const signatures = [
  "both->first  :: (a => b) => (a => c) => a => b|c",
  "both->second ::             (a => c) => a => b|c",
  "both         ::                         a => b|c",
];

export const implementation = (first) =>
  (second) => (value) => first(value) && second(value);

export const both = sign(signatures, implementation);
