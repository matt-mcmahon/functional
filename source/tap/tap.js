import { sign } from "@mwm/sign";

export const signatures = [
  "tap :: (a => *) => a => a",
  "tap ::             a => a",
];

export const implementation = (f) => (a) => {
  f(a);
  return a;
};

/**
 * ```
 * tap :: (a -> *) -> a -> a
 * ```
 * -----------------------------------------------------------------------------
 * Takes a function, a _value_, and applies the value to the function for it's
 * _sideEffect_. Ignores any value returned by the side effect function, and
 * returns the _value_ instead.
 */
export const tap = sign(signatures, implementation);
