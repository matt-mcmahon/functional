import { describe } from "../../lib/remote/describe.ts";
import { trim } from "./trim.ts";

describe("trim", async ({ assert, inspect }) => {
  {
    const value = "  \n   foo  \n   ";
    const expected = "foo";
    const actual = trim(value);
    const given = inspect`trim(${value})`;
    assert({ expected, actual, given });
  }
  {
    const value = "  \n   foo    bar  \n   ";
    const expected = "foo    bar";
    const actual = trim(value);
    const given = inspect`trim(${value})`;
    assert({ expected, actual, given });
  }
});
