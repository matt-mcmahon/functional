export type Falsy = null | undefined | false | 0 | -0 | 0n  | ""

/**
 * ```haskell
 * isFalsy :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns `true` if __a__ is a falsy value, `false` otherwise. Falsy values 
 * include: `null`, `undefined`, `false`, `NaN`, `0`, `-0`, `0n`, and `""`. 
 * 
 * When isFalsy is used as [type guard][1], it includes several 
 * [literal typess][2]. The values `-0` and `NaN` are not a valid literal types 
 * and cannot be included in the type predicate.
 * 
 * [1]: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 * [2]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 */
export const isFalsy = (a: unknown): a is Falsy => !a;
