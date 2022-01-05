/**
 * ```haskell
 * bind :: (...as => b) => o => ...as => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a new _Function_ that binds a _method_, __m__, to a _context_, __o__.
 *
 * @param m - a function that depends on a dynamic `this` context
 * @param o - the method's context
 *
 * @example
 * ```js
 * const setFooBar = bind(function (a) { a.foo = "bar" })
 * setFooBar({ foo: "foo" }) //=> { foo: "bar" }
 * ```
 */
export const bind =
  <M extends CallableFunction>(m: M) =>
  (b: ThisParameterType<M>): OmitThisParameter<M> =>
    m.bind(b)
