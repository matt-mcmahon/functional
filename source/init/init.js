import { sign } from "@mwm/sign";

export const signatures = ["init :: as => as"];

export const implementation = (as) => as.slice(0, as.length - 1);

export const init = sign(signatures, implementation);
