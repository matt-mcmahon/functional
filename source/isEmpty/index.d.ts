/**
 * ```
 * isEmpty :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is an empty value for it's type,
 * `false` otherwise. For example:
 *
 * ```
 * isEmpty("") //> true
 * isEmpty([]) //> true
 * isEmpty(0)  //> false
 * ```
 */
export declare function isEmpty<A>(a: A): boolean;
