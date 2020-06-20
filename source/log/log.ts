import { sign } from "@mwm/sign";

//deno-fmt-ignore
export const signatures = ["log :: s => a => a", "log ::      a => a"];

export const implementation = (s) => (a) => {
  console.groupCollapsed(s);
  console.log(a);
  console.groupEnd;
  return a;
};

/**
 * ```
 * log :: s -> a -> a
 * ```
 * -----------------------------------------------------------------------------
 * Takes a string, a _value_, logs the string and the value, and then returns
 * the _value_.
 */
export const log = sign(signatures, implementation);
