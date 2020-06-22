/**
 * type `A` ensures that our object contains the property PropertyName
 */
type A<B, PropertyName extends string> = { [P in PropertyName]: B };

/**
 * ```
 * prop :: k => a.k => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the value of the given _property_ for the object.
 *
 */
export const prop = <B, PropertyKey extends string>(
  propertyKey: PropertyKey,
) => (a: A<B, PropertyKey>) => a[propertyKey];
