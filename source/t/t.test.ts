import { describe } from "../../lib/describe.ts";
import { T } from "./t.ts";

describe("source/t.ts", async ({ assert, inspect }) => {
  const expected = true;

  assert({
    given: inspect`no argument to ${T}`,
    should: inspect`return ${true}`,
    actual: T(),
    expected,
  });

  assert({
    given: inspect`argument ${false} to ${T}`,
    should: inspect`ignorer argument and return ${true}`,
    actual: T(false),
    expected,
  });
});
