import { assertEquals } from "testing";
import { toArray } from "./toArray.ts";

Deno.test("toArray", () => {
  const data: [Iterable<string>, Array<string>][] = [
    [
      ["a", "b", "c", "d", "e"],
      ["a", "b", "c", "d", "e"],
    ],
    ["abcde", ["a", "b", "c", "d", "e"]],
    [new Set(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d", "e"]],
  ];

  const test = ([value, expected]: [Iterable<string>, Array<string>]) => {
    assertEquals(toArray(value), expected);
  };

  data.forEach(test);
});
