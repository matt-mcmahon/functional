/**
 * ```haskell
 * isDefined :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Predicate that returns `true` if __a__ is an array, otherwise return `false`.
 */
export const isBoolean = (value: unknown): value is boolean => {
	return typeof value === 'boolean'
}
