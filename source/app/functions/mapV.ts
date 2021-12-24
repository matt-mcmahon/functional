export const mapV =
  <A, B>(ab: (a: A) => B) =>
  (...as: A[]): B[] =>
    as.map(ab)
