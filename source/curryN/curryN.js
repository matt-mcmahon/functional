import { sign } from "@mwm/sign";

export const signatures = [
  "curryN :: n => ((a¹, a², ..., aⁿ) => b) =>  a¹ => a²... => aⁿ => b",
  "curryN ::      ((a¹, a², ..., aⁿ) => b) =>  a¹ => a²... => aⁿ => b",
];

const gatherN = (n, f) =>
  function g(...as) {
    return as.length < n ? (a) => g(...as, a) : f(...as);
  };

const genSigns = (name, length) => {
  const signatures = [];
  for (let i = 0; i < length; i++) {
    signatures.push({ [name + i]: 1 });
  }
  return signatures;
};

/**
 * ```
 * curryN :: n => ((a¹, a², ..., aⁿ) => b) =>  a¹ => a²... => aⁿ => b
 * ```
 * -----------------------------------------------------------------------------
 * Converts a _Variadic_ function that accepts _arity_ number of arguments into
 * a series of arity-number _Unary_ functions that produce the same final value.
 *
 * ```
 * const sum = (...ns) => ns.reduce((n,m)=>n+m,0)
 */
export const implementation = (n) => (f) => {
  const s = genSigns(f.name, n);

  return sign(s, gatherN(n, f));
};

export const curryN = sign(signatures, implementation);
