/**
 * ```
 * bind :: (...as => b) => o => ...as => b
 * ```
 * -----------------------------------------------------------------------------
 * Creates a new _Function_ that binds a __method__ to a __context__.
 *
 * @param method a function that depends on a dynamic `this` context
 * @param object the method's context
 */
export declare const bind: <F extends Function>(m: F) => <B>(b: B) => F;
//# sourceMappingURL=bind.d.ts.map