import { assertEquals } from "testing";
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
