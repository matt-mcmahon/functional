import { describe } from "../../lib/describe.ts";
import { slice } from "./slice.ts";

describe("source/slice.ts", async ({ assert, inspect }) => {
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
    assert({
      expected: bs.slice(1, 4),
      actual: slice(1)(4)(as),
    });

    assert({
      expected: bs.slice(2, -1),
      actual: slice(2)(-1)(as),
    });

    assert({
      expected: bs.slice(2),
      actual: slice(2)()(as),
    });

    assert({
      expected: bs.slice(2, 100),
      actual: slice(2)(100)(as),
    });

    assert({
      expected: bs.slice(),
      actual: slice()()(as),
    });
  }
});
