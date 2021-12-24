export const orDefault =
  <A>(defaultValue: A) =>
  (value: A | null | undefined): A =>
    value ?? defaultValue
