import { sign } from "@mwm/sign";

export const signatures = [
  "reduceRight->reducer     :: ((a, b) => a) => a => [bⁿ, ..., b², b¹, b⁰] => a",
  "reduceRight->accumulator ::                  a => [bⁿ, ..., b², b¹, b⁰] => a",
  "reduceRight              ::                       [bⁿ, ..., b², b¹, b⁰] => a",
];

export const implementation = (r) =>
  (a) =>
    (bs) => {
      if (bs && bs.length > 0) {
        const [value] = bs.slice(-1);
        const reducedArray = bs.slice(0, -1);
        const reducedAccumulator = r(a, value);
        return implementation(r)(reducedAccumulator)(reducedArray);
      } else {
        return a;
      }
    };

export const reduceRight = sign(signatures, implementation);
