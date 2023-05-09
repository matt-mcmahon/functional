import { assertEquals } from "testing";
import { T } from "./T.ts";

Deno.test("t", () => {
  assertEquals(
    T(),
    true,
  );

  assertEquals(
    T(false),
    true,
  );
});
