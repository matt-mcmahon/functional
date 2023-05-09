import { assertEquals } from "testing";
import { init } from "./init.ts";

Deno.test("init", () => {
  assertEquals(init(["a", "b", "c"]), ["a", "b"]);
  assertEquals(init(["a"]), []);
  assertEquals([], []);
});
