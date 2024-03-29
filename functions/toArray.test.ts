import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { toArray } from "./toArray.ts";

Deno.test("to-string", () => {
  const data: [Iterable<string>, Array<string>][] = [
    [
      ["a", "b", "c", "d", "e"],
      ["a", "b", "c", "d", "e"],
    ],
    [
      "abcde",
      ["a", "b", "c", "d", "e"],
    ],
    [
      new Set(["a", "b", "c", "d", "e"]),
      ["a", "b", "c", "d", "e"],
    ],
  ];

  const test = ([value, expected]: [
    Iterable<string>,
    Array<string>,
  ]) => {
    assertEquals(
      toArray(value),
      expected,
    );
  };

  data.forEach(test);
});
