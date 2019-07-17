import { Predicate } from "../types"
/**
 * ```
 * isEmpty :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * __Predicate__ that returns `true` if it's argument is an empty value for
 * it's type, `false` otherwise. For example:
 *
 * ```
 * isEmpty("") //> true
 * isEmpty([]) //> true
 * isEmpty(0)  //> false
 * ```
 */
export declare const isEmpty: Predicate<any>
