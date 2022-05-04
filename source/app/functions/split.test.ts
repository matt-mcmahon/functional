import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { split } from "./split.ts";

Deno.test("split", () => {
  const value = "one two three";

  assertEquals(split(" ")(value), value.split(" "));
  assertEquals(split(" ")(value), ["one", "two", "three"]);

  assertEquals(split(" ", 2)(value), value.split(" ", 2));
  assertEquals(split(" ", 2)(value), ["one", "two"]);
  assertEquals(split(" ", 9)(value), ["one", "two", "three"]);
  assertEquals(split(" ", 0)(value), []);

  assertEquals(
    split(", ")("one, two, three"),
    ["one", "two", "three"],
  );

  assertEquals(
    split("-")(value),
    [value],
  );

  assertEquals(
    split("")(value),
    ["o", "n", "e", " ", "t", "w", "o", " ", "t", "h", "r", "e", "e"],
  );

  assertEquals(
    split()(value),
    [value],
  );

  assertEquals(
    split(" ")(""),
    [""],
  );

  assertEquals(
    split("")(""),
    [],
  );

  assertEquals(
    split("")("𝟘𝟙𝟚𝟛"),
    ["𝟘", "𝟙", "𝟚", "𝟛"],
    "should respect surrogate pairs",
  );
});
