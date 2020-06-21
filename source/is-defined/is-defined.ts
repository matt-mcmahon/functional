import { Something } from "../types.d.ts";

/**
 * ```
 * isDefined :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns `false` if __a__ is `NaN`, `undefined`, or `null`, otherwise returns
 * `true`.
 *
 */
export const isDefined = (
  a: unknown,
): a is Something => !(isUndefined(a) || isNull(a) || Number.isNaN(a));

const isUndefined = (a: unknown): a is undefined => a === undefined;
const isNull = (a: unknown): a is null => a === null;
