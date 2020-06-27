/**
 * type `A` ensures that our object contains the property PropertyName
 */
declare type A<B, PropertyName extends string> = {
    [P in PropertyName]: B;
};
/**
 * ```
 * prop :: k => a.k => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the value of the given _property_ for the object.
 *
 */
export declare const prop: <B, PropertyKey_1 extends string>(propertyKey: PropertyKey_1) => (a: A<B, PropertyKey_1>) => A<B, PropertyKey_1>[PropertyKey_1];
export {};
//# sourceMappingURL=prop.d.ts.map