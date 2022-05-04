import {
  assertEquals,
  fail,
} from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { has } from "./has.ts";

Deno.test("has", () => {
  const ownFoo = has("foo");

  assertEquals(typeof ownFoo, "function");
  assertEquals(ownFoo(null), false);
  assertEquals(ownFoo(undefined), false);
  assertEquals(has("toString")({ foo: "foo" }), false);
  assertEquals(has("toString")(7), false);
  assertEquals(has("toString")(true), false);

  const a = { a: "a" };
  const b = { b: "b" };
  const hasA = has("a");
  const hasB = has("b");

  assertEquals(hasA(a), true);
  assertEquals(hasB(b), true);
  assertEquals(hasB(a), false);
  assertEquals(hasA(b), false);

  const instanceOfB = Object.create(b);
  instanceOfB.a = "a";

  assertEquals(hasA(instanceOfB), true);
  assertEquals(hasB(instanceOfB), false);

  function unlessNever(_: never) {
    fail("this should never run");
  }

  if (hasA(a)) assertEquals(a.a, "a");
  else unlessNever(a);
});
