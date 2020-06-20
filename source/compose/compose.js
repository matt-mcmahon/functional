import { sign } from "@mwm/sign";

// ⁿ²¹⁰
export const signatures = [
  { "compose :: (aⁿ => b, ..., a¹ => a², a => a¹) => a => b": Infinity },
  { "compose ::                                      a => b": Infinity },
];

const reducer = (v, f) => f(v);

export const implementation = (...functions) => (...as) => {
  const [f, ...fs] = functions.reverse();
  return fs.reduce(reducer, f(...as));
};

/**
 * ```
 * curry :: ((a¹, a²..., aⁿ) => b) => a¹ => a²...=> aⁿ => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the composition, right-to-left, of each _functions_ where the output
 * of the right-most is given as the input to the next-right-most function,
 * etc., e.g.:
 *
 * ```
 * compose(h, g, f)(v) => h(g(f(v)))
 * ```
 */
export const compose = sign(signatures, implementation);
