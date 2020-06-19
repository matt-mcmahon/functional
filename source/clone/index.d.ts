/**
 * ```
 * clone :: (a, this?) => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns a deep-clone of it's argument, `a`.
 *
 * __Warning__: _clone_ cannot create true copies of a _Method_ or any function
 * with a dynamic `this`. If you need to clone a _Method_, supply a `context`
 * parameter to fix the value for `this` inside the function, or it may not
 * behave as expected.
 */
export declare function clone<T>(a: T, context?: Function): T;
