import { assertEquals } from "testing";
import { head } from "./head.ts";

Deno.test("head", () => {
  const as = ["a", "b", "c"];
  assertEquals(head(as), "a");
  assertEquals(head([]), undefined);
});
