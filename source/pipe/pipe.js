import { sign } from "@mwm/sign";

export const signatures = [
  { "pipe :: ((...as => b), (b => c), ..., (y => z)) => ...as => z": Infinity },
  { "pipe ::                                            ...as => z": Infinity },
];

const reducer = (v, f) => f(v);

export const implementation = (...functions) =>
  (...as) => {
    const [f, ...fs] = functions;
    return fs.reduce(reducer, f(...as));
  };
export const pipe = sign(signatures, implementation);
