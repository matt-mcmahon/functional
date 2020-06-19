import { sign } from "@mwm/sign";

export const signatures = ["isDefined :: a => boolean"];

export const implementation = (a) => a === a && a !== undefined && a !== null;

export const isDefined = sign(signatures, implementation);
