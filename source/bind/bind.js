import { sign } from "@mwm/sign";

export const signatures = [
  { "bind->method :: (...as #> b) => o => ...as => b": 1 },
  { "bind->this   ::                 o => ...as => b": 1 },
  { "bound        ::                      ...as => b": Infinity },
];
export const implementation = (m) => (t) => (...as) => m.apply(t, as);

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
export const bind = sign(signatures, implementation);
