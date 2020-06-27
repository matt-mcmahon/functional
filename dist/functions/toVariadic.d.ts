/**
 * ```
 * toVariadic :: (as => b) => ...as => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a _Unary_ function that accepts an array as its argument, and returns
 * that accepts any number of arguments instead.
 *
 */
export declare const toVariadic: <AS extends unknown[], B>(u: (as: AS) => B) => (...as: AS) => B;
//# sourceMappingURL=toVariadic.d.ts.map