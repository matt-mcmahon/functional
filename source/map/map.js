import { sign } from "@mwm/sign";

export const signatures = [
  { "map :: (a => b) => as => bs": 1 },
  { "map ::             as => bs": 1 },
];

export const implementation = (mapAB) => (as) => as.map(mapAB);

/**
 * ```
 * map :: (a => b) => as => bs
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a __Unary__ function and a __Mappable__, applies the function to
 * each of the mappable values. Returns a mappable of the same type.
 */
export const map = sign(signatures, implementation);
