import { describe } from "../../lib/describe.ts";
import { join } from "./join.ts";

describe("source/join", async ({ assert, inspect }) => {
  {
    const char = "-";
    const f = join(char);
    const list = ["a", "b", "c"];
    const actual = f(list);
    const expected = "a-b-c";
    const given = inspect`join(${char})(${list})`;
    const should = inspect`be ${expected}`;
    assert({ given, should, actual, expected });
  }
});
