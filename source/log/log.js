import { sign } from "@mwm/sign";

//deno-fmt-ignore
export const signatures = [
  "log :: s => a => a",
  "log ::      a => a",
];

export const implementation = (s) =>
  (a) => {
    console.groupCollapsed(s);
    console.log(a);
    console.groupEnd;
    return a;
  };

export const log = sign(signatures, implementation);
