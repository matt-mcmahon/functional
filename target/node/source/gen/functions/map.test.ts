import { map } from "./map";
import { describe } from "../../lib/describe";

describe("map", ({ assert, inspect }) => {
  const as = ["1", "2", "3"];
  const bs = [1, 2, 3];
  const ab = (a: string) => parseInt(a, 10);

  {
    const f = map(ab);
    const actual = f(as);
    const expected = bs;
    const given = inspect`map(${ab})(${as})`;
    const should = `accept accept an array`;
    assert({ actual, expected, given, should });
  }
});
