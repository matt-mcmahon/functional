import { describe } from "../../lib/describe.ts";
import { always } from "./always.ts";

describe("always", ({ assert, inspect }) => {
  const expected = "bar";
  const alwaysBar = always(expected);
  const foo = "foo";
  assert({
    actual: alwaysBar(foo),
    expected,
    given: inspect`always(${expected})(${foo})`,
    should: inspect`still return ${expected}`,
  });
});
