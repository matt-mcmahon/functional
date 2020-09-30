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
export declare const prop: <K extends string | number | symbol>(k: K) => <B>(a: { [P in K]: B; }) => B;
