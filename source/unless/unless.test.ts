import { describe } from "../../lib/describe.ts";
import { unless } from "./unless.ts";
import { isNil } from "../is-nil/is-nil.ts";

describe("source/unless", async ({ assert, inspect }) => {
  const isA = (v: unknown) => v === "A";
  const makeB = (v: unknown) => "B";
  const make_B_unless_is_A = unless(isA)(makeB);

  {
    const value = "C";
    const expected = "B";
    const actual = make_B_unless_is_A(value);
    const given = inspect`make_B_unless_is_A(${value})`;
    assert({ expected, actual, given });
  }

  {
    const value = "A";
    const expected = "A";
    const actual = make_B_unless_is_A(value);
    const given = inspect`make_B_unless_is_A(${value})`;
    assert({ expected, actual, given });
  }

  const inc = (n: number) => n + 1;
  const isNotSafe = (n: number) =>
    n >= Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER;
  const unlessNotSafe = unless(isNotSafe);
  const saferInc = unlessNotSafe(inc);
  {
    const value = Number.MAX_SAFE_INTEGER;
    const expected = value;
    const actual = saferInc(value);
    const given = inspect`saferInc(${value})`;
    assert({ expected, actual, given });
  }

  {
    const value = 1;
    const expected = 2;
    const actual = saferInc(value);
    const given = inspect`saferInc(${value})`;
    assert({ expected, actual, given });
  }
});
