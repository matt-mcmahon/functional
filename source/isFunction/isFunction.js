import { sign } from "@mwm/sign";

export const signatures = ["isFunction :: a => boolean"];

export const implementation = (a) => typeof a === "function";

export const isFunction = sign(signatures, implementation);
