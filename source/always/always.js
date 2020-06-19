import { sign } from "@mwm/sign";

export const signatures = [
  { "always :: a => * => a": 1 },
  { "always ::      * => a": 0 },
];

export const implementation = (a) => () => a;

export const always = sign(signatures, implementation);
