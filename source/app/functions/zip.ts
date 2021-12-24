/**
 * Join two arrays in index order, __as__ before __bs__, into a single flat
 * array.
 */
export const zip =
  <A>(as: readonly A[]) =>
  (bs: readonly A[]): A[] => {
    const zipped: A[] = []

    const max = Math.max(as.length, bs.length)

    for (let i = 0; i < max; i++) {
      if (as.length > i) {
        zipped.push(as[i])
      }
      if (bs.length > i) {
        zipped.push(bs[i])
      }
    }

    return zipped
  }
