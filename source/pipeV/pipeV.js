import { sign } from "@mwm/sign";

export const signatures = [
  {
    "pipeV :: (...as) => ((a⁰ => a¹), (a¹ => a²), ..., (aⁿ=> b)) =>  b":
      Infinity,
  },
  {
    "pipeV ::            ((a⁰ => a¹), (a¹ => a²), ..., (aⁿ=> b)) =>  b":
      Infinity,
  },
];

export const implementation = (...as) =>
  (f, ...fs) => fs.reduce((a, f) => f(a), f(...as));

export const pipeV = sign(signatures, implementation);
