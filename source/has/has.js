import { sign } from "@mwm/sign";

export const hasOwnProperty = {}.hasOwnProperty;

export const signatures = [
  "has :: k => a => boolean",
  "has ::      a => boolean",
];

export const implementation = (k) => (a) => hasOwnProperty.call(a, k);

export const has = sign(signatures, implementation);
