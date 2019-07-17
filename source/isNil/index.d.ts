import { Predicate } from "../types"
/**
 * ```
 * isNil :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * __Predicate__ that returns `true` if it's argument is `null` or
 * `undefined`, `false` otherwise. For example
 *
 * ```
 * isNil(null)      //> true
 * isNil(undefined) //> true
 * isNil(0)         //> false
 * ```
 */ export declare const isNil: Predicate<any>
