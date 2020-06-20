import { sign } from "@mwm/sign";

export const signatures = [
  { "pipe :: ((...as => b), (b => c), ..., (y => z)) => ...as => z": Infinity },
  { "pipe ::                                            ...as => z": Infinity },
];

const reducer = (v, f) => f(v);

export const implementation = (...functions) => (...as) => {
  const [f, ...fs] = functions;
  return fs.reduce(reducer, f(...as));
};

/**
 * ```
 * pipe :: ((...as => b), (b => c), ..., (y => z)) => ...as => z
 * ```
 * -----------------------------------------------------------------------------
 *
 * _Pipe_ is a _Variadic_ _Combinator_, that takes one or more _Unary_
 * __functions__ and a __value__. It _composes_ the functions in left-to-right
 * order — evaluating the first function and applying it's result to the second,
 * it's result to third, etc. — and returns the result of evaluating the final
 * function. E.g.:
 *
 * ```
 * pipe(f, g, h)(v) <=> h(g(f(v)))
 * ```
 */
export const pipe = sign(signatures, implementation);