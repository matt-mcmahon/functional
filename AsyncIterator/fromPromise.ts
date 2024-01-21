export async function* fromPromise<X>(x: PromiseLike<X>) {
  yield x;
}
