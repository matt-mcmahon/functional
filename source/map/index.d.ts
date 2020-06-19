import { Unary, Mappable } from "../types";

/**
 * ```
 * map :: (a => b) => as => bs
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a __Unary__ function and a __Mappable__, applies the function to
 * each of the mappable values. Returns a mappable of the same type.
 */
export declare function map<A, B>(
  mapAB: Unary<A, B>,
  as: Mappable<A>,
): Mappable<B>;
