export function filter<A>(predicate: (a: A) => boolean) {
  return async function* (as: Iterable<A>) {
    for await (const a of as) {
      if (predicate(a)) yield a;
    }
  };
}
