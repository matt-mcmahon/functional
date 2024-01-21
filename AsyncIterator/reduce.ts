export function reduce<A, B>(reduceFn: (b: B, a: A) => B, init: B) {
  return async (as: Iterable<A>) => {
    let b = init;
    for await (const a of as) b = reduceFn(b, a);
    return b;
  };
}
