import { assert } from "testing";
import { identity } from "./identity.ts";

Deno.test("identity", () => {
  const foo = { name: "foo" };
  assert(identity(foo) === foo);
});
