import { assertEquals } from "testing";
import { always } from "./always.ts";

Deno.test("always", () => {
  assertEquals(always("bar")("foo"), "bar");
});
