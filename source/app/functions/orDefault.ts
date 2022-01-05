/**
 * ```haskel
 * orDefault :: a => x => a
 * ```
 *
 * @param defaultValue value if __x__ is `null` or `undefined`
 * @returns __x__ or __defaultValue__
 */
export const orDefault =
  <A>(defaultValue: A) =>
  <X extends A | null | undefined>(value: X): A =>
    value ?? defaultValue
