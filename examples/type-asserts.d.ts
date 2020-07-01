// Give "any" its own class
export class Any {
  private _: true
}

// Conditional returns can enforce identical types.
// See here: https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
// prettier-ignore
type TestExact<Left, Right> =
  (<U>() => U extends Left ? 1 : 0) extends (<U>() => U extends Right ? 1 : 0) ? Any : never;

type IsAny<T> = Any extends T ? ([T] extends [Any] ? 1 : 0) : 0

export type Test<Left, Right> = IsAny<Left> extends 1
  ? IsAny<Right> extends 1
    ? "PASS"
    : "FAIL"
  : IsAny<Right> extends 1
  ? "FAIL"
  : [Left] extends [Right]
  ? [Right] extends [Left]
    ? Any extends TestExact<Left, Right>
      ? "PASS"
      : "FAIL"
    : "FAIL"
  : "FAIL"

type Assert<T, U> = U extends 1
  ? T // No error.
  : IsAny<T> extends 1
  ? never // Ensure "any" is refused.
  : U // Return the error message.

/**
 * Raise a compiler error when both argument types are not identical.
 */
export const assert: <Left, Right>(
  left: Assert<Left, Test<Left, Right>>,
  right: Assert<Right, Test<Left, Right>>
) => Right

/**
 * Placeholder value followed by "as T"
 */
export const _: any

/** Same as "it" */
export const test: {
  (fn: () => void): void
  (name?: string, fn?: () => void): void
}

/** The "it" of spec.ts */
export const it: typeof test

/** The "describe" of spec.ts */
export const describe: typeof test
