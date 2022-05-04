import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { trim } from "./trim.ts";

Deno.test("trim", () => {
  assertEquals(
    trim("  \n   foo  \n   "),
    "foo",
  );

  assertEquals(
    trim("  \n   foo    bar  \n   "),
    "foo    bar",
  );
});
