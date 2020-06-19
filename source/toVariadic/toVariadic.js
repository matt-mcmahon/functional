import { sign } from "@mwm/sign";

export const signatures = [
  { "toVariadic->unary     :: (as => b) => ...as => b": 1 },
  { "toVariadic->arguments ::              ...as => b": Infinity },
];

export const implementation = (unary) => (...as) => unary(as);

export const toVariadic = sign(signatures, implementation);
