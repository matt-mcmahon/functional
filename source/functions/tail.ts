/**
 * ```
 * tail :: as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the portion of an array not including the first element.
 *
 */
export const tail = <Ignored extends unknown, AS extends readonly unknown[]>([
  ignored,
  ...as
]: readonly [Ignored, ...AS]): AS => as
