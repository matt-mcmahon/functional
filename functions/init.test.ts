import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { init } from "./init.ts";

Deno.test("init", () => {
  assertEquals(init(["a", "b", "c"]), ["a", "b"]);
  assertEquals(init(["a"]), []);
  assertEquals([], []);
});
