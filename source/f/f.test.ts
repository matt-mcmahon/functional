import { describe } from "../../lib/describe.ts";
import { F } from "./f.ts";

describe("source/f.ts", async ({ assert, inspect }) => {
  const expected = false;

  assert({
    given: inspect`no argument to ${F}`,
    should: inspect`return ${false}`,
    actual: F(),
    expected,
  });

  assert({
    given: inspect`argument ${true} to ${F}`,
    should: inspect`ignorer argument and return ${false}`,
    actual: F(true),
    expected,
  });
});
