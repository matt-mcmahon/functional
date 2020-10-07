import { describe } from "../../lib/describe.ts";
import { init } from "./init.ts";

describe("init", ({ assert, inspect }) => {
  {
    const given = inspect`init(${["a", "b", "c"]})`;
    const actual = init(["a", "b", "c"]);
    const expected = ["a", "b"];
    assert({ given, actual, expected });
  }

  {
    const given = inspect`init(${["a"]})`;
    const actual = init(["a"]);
    const expected: string[] = [];
    assert({ given, actual, expected });
  }

  {
    const given = inspect`init(${[]})`;
    const expected: string[] = [];
    const actual = init([]);
    assert({ given, actual, expected });
  }
});
