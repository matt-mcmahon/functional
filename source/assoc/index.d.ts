import { Key } from "../types"

/**
 * Creates a clone of object, _a_, with the additional property
 * `a[key] = value`.
 */
export declare function assoc(key: Key, value: any, a: object): object
