/**
 * type `A` ensures that our object contains the property PropertyName
 */
declare type Invokable<F extends Function, PropertyName extends string> = {
    [P in PropertyName]: F;
};
/**
 * ```
 * invoker :: k => (...as) => (b.k => c) => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a method name, __k__; one or more arguments, __as__; and an object,
 * __b__, which has a method of name __k__. It invokes the method, applying
 * __as__ as arguments, and returns the result, __c__; i.e.:
 *
 * ```
 * invoker(k, ...as, b) <=> b[k](...as) <=>
 * ```
 * @todo Add support for Variadic Tuples when TypeScript 4 is released.
 */
export declare const invoker: <B, PropertyKey_1 extends string>(propertyKey: PropertyKey_1) => <A extends unknown>(...args: A[]) => <F extends Function>(a: Invokable<F, PropertyKey_1>) => F;
export {};