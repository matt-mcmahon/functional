import { sign } from "@mwm/sign";

// ⁿ²¹⁰
export const signatures = [
  { "compose :: (aⁿ => b, ..., a¹ => a², a => a¹) => a => b": Infinity },
  { "compose ::                                      a => b": Infinity },
];

const reducer = (v, f) => f(v);

export const implementation = (...functions) =>
  (...as) => {
    const [f, ...fs] = functions.reverse();
    return fs.reduce(reducer, f(...as));
  };

export const compose = sign(signatures, implementation);
