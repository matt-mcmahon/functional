export type Mappable<A, B> = { map(ab: (a: A) => B): B[] }

export const map =
  <A, B>(ab: (a: A) => B) =>
  (as: Mappable<A, B>) =>
    as.map(ab)
