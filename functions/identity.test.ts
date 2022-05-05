import { assert } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { identity } from "./identity.ts";

Deno.test("identity", () => {
  const foo = { name: "foo" };
  assert(identity(foo) === foo);
});
