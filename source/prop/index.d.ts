import { Key } from "../types"

/**
 * ```
 * prop :: k => {k:a} => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the value for the object, of the given _propName_
 *
 */
export declare function prop(propName: Key, object: object): any
