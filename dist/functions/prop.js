"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = void 0;
/**
 * ```
 * prop :: k => { k: b } => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the value, __`b`__, of the given property key, __`k`__, for any
 * object __`{ k: b }`__.
 *
 * ```
 * const obj = {
 *   foo: "FOO"
 * };
 * obj.foo <=> prop("foo")(obj) <=> "FOO"
 * ```
 */
exports.prop = (k) => (a) => a[k];
