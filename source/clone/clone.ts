import { assoc } from "./assoc.ts";
import { ifElse } from "./if-else.ts";
import { identity } from "./identity.ts";
import { isObject, isNil } from "./is.ts";

function cloneObject<A extends object>(a: A, map = new WeakMap()): A {
  if (map.has(a)) return map.get(a);
  const c = Object.entries(a).reduce((clone, [key, value]) => {
    return Object.assign(clone, { [key]: cloneUnknown(value, map) });
  }, {} as A);
  map.set(a, c);
  return c;
}

function cloneUnknown<A>(a: A, map = new WeakMap()): A {
  if (isNil(a)) {
    return a;
  }
  if (a instanceof Date) {
    return new Date(a.valueOf()) as unknown as A;
  }
  if (Array.isArray(a)) {
    return a.map((v) => cloneUnknown(v, map)) as unknown as A;
  }
  if (typeof a === "object" || typeof a === "function") {
    return cloneObject(a as unknown as object, map) as unknown as A;
  }
  return a;
}

/**
 * ```
 * clone :: a => a
 * ```
 * @export
 * @template A
 * @param {A} a
 * @returns {A}
 */
export function clone<A>(a: A): A {
  const map = new WeakMap();
  return cloneUnknown(a, map);
}
