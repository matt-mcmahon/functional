import { sign } from "@mwm/sign";

export const signatures = ["not :: a => boolean"];

export const implementation = (value) => !value;

export const not = sign(signatures, implementation);
