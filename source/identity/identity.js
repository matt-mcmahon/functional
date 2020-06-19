import { sign } from "@mwm/sign";

export const signatures = [{ "identity :: a => a": 1 }];

export const implementation = (value) => value;

export const identity = sign(signatures, implementation);
