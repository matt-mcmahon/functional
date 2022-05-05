import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { defaultTo } from "./defaultTo.ts";

Deno.test("defaultTo", () => {
  const defaultValue = "replaced";

  assertEquals(
    defaultTo(defaultValue)(false),
    false,
  );

  assertEquals(
    defaultTo(defaultValue)(0),
    0,
  );

  assertEquals(
    defaultTo(defaultValue)(""),
    "",
  );

  assertEquals(
    defaultTo(defaultValue)(null),
    defaultValue,
  );

  assertEquals(
    defaultTo(defaultValue)(undefined),
    defaultValue,
  );

  assertEquals(
    defaultTo(defaultValue)(NaN),
    defaultValue,
  );
});
