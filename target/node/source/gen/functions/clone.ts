// deno-lint-ignore-file ban-types

import { isArray } from "./isArray";
import { isDate } from "./isDate";
import { isObject } from "./isObject";
import { isDefined } from "./isDefined";

function cloneObject<A extends object>(a: A, map: WeakMap<object, unknown>): A {
  if (map.has(a)) {
    return map.get(a) as A;
  } else {
    const clone: Partial<A> = {};
    map.set(a, clone);
    Object.entries(a).reduce((clone, [key, value]) => {
      return Object.assign(clone, { [key]: cloneUnknown(value, map) });
    }, clone);
    return clone as A;
  }
}

function cloneDate(a: Date): Date {
  return new Date(a.valueOf());
}

function cloneArray<A extends unknown[]>(
  a: A,
  map: WeakMap<object, unknown>,
): A {
  if (map.has(a)) {
    return map.get(a) as A;
  } else {
    const clone: unknown[] = [];
    map.set(a, clone);
    return a.reduce((clone: unknown[], v: unknown) => {
      clone.push(cloneUnknown(v, map));
      return clone;
    }, clone) as A;
  }
}

function cloneUnknown<A>(a: A, map: WeakMap<object, unknown>): A {
  const t = isDefined(a)
    ? isDate(a)
      ? cloneDate(a)
      : isArray(a)
      ? cloneArray(a, map)
      : isObject(a)
      ? cloneObject(a, map)
      : a
    : a;
  return t as unknown as A;
}

/**
 * ```haskell
 * clone :: a => a
 * ```
 * @param a
 * @returns a deep clone of __a__
 *
 * @example
 * ```js
 *
 * const a = { hasFoo: { foo: 'foo', a: a }}
 * const b = clone(a)
 *
 * b === a //=> false
 * b //=> { hasFoo: { foo: 'foo': a: a }}
 * ```
 */
export const clone = <A>(a: A): A => cloneUnknown(a, new WeakMap());
