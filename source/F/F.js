import { sign } from "@mwm/sign";

export const signatures = [{ "F :: * => false": 1 }];

export const implementation = () => false;

export const F = sign(signatures, implementation);
