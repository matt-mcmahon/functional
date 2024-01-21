export function flatMap<A, B>(mapAB: (a: A) => AsyncIterable<B>) {
  return async function* (as: Iterable<A>) {
    for await (const a of as) yield* mapAB(a);
  };
}
