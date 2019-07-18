import { Key } from "../types"

/**
 * ```
 * prop :: k => a.k => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the value of the given _property_ for the object.
 *
 */
export declare function prop(k: Key, ak: object): any
