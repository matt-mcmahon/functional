import { sign } from "@mwm/sign";

export const signatures = ["T :: a => true"];

export const implementation = (a) => true;

export const T = sign(signatures, implementation);
