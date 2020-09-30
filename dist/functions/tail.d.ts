/**
 * ```
 * tail :: as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the portion of an array not including the first element.
 *
 */
export declare const tail: <A>([, ...as]: readonly A[]) => A[];
