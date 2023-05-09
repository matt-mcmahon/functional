import { assertEquals } from "testing";
import { slice } from "./slice.ts";

Deno.test("slice", () => {
  assertEquals(
    slice(1)(4)([0, 1, 2, 3, 4]),
    [1, 2, 3],
  );

  test(
    ["a", "b", "c", "d", "e"],
    ["a", "b", "c", "d", "e"],
  );

  test(
    "abcde",
    ["a", "b", "c", "d", "e"],
  );

  test(
    new Map([["0", "a"], ["1", "b"], ["2", "c"], ["3", "d"], ["4", "e"]]),
    [["0", "a"], ["1", "b"], ["2", "c"], ["3", "d"], ["4", "e"]],
  );

  test(
    new Set(["a", "b", "c", "d", "e"]),
    ["a", "b", "c", "d", "e"],
  );

  function test<A>(as: Iterable<A>, bs: A[]) {
    assertEquals(
      slice(1)(4)(as),
      bs.slice(1, 4),
    );

    assertEquals(
      slice(2)(-1)(as),
      bs.slice(2, -1),
    );

    assertEquals(
      slice(2)()(as),
      bs.slice(2),
    );

    assertEquals(
      slice(2)(100)(as),
      bs.slice(2, 100),
    );

    assertEquals(
      slice()()(as),
      bs.slice(),
    );
  }
});
