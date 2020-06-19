import { sign } from "@mwm/sign";

export const signatures = [{ "head :: as => a": 1 }];

export const implementation = (as) => as[0];

export const head = sign(signatures, implementation);
