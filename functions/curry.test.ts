import { assertEquals } from "testing";
import { curry } from "./curry.ts";

Deno.test("curry", () => {
  const f = function f(a: string, b: string, c: string) {
    return a + b + c;
  };

  assertEquals(f.length, 3);

  const f0 = curry(f);

  assertEquals(typeof f0, "function");

  assertEquals(f0("a", "b", "c"), "abc");
  assertEquals(f0("a")("b", "c"), "abc");
  assertEquals(f0("a", "b")("c"), "abc");
  assertEquals(f0("a")("b")("c"), "abc");
});
