export const ifElse = <A, B, C, D>(
  predicate: (x: A | C) => boolean,
  whenTrue: (a: A) => B,
  whenFalse: (c: C) => D,
) => (x: A | C): B | D => predicate(x) ? whenTrue(<A> x) : whenFalse(<C> x);
