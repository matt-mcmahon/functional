import { sign } from "@mwm/sign";

export const signatures = [
  { "split :: s => s => ss": 1 },
  { "split ::      s => ss": 1 },
];

export const implementation = (a) => (b) => b.split(a);

export const split = sign(signatures, implementation);
