import { mapV } from "./mapV";
import { describe } from "../../lib/describe";

describe("map", ({ assert, inspect }) => {
  const as = ["1", "2", "3"];
  const bs = [1, 2, 3];
  const ab = (a: string) => parseInt(a, 10);

  {
    const f = mapV(ab);
    const actual = f(...as);
    const expected = bs;
    const given = inspect`mapV(${ab})(${1}, ${2}, ${3})`;
    const should = `accept multiple arguments`;
    assert({ actual, expected, given, should });
  }
});
