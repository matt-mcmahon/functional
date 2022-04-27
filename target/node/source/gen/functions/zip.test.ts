import { describe } from "../../lib/describe";
import { zip } from "./zip";

describe("zip", ({ assert }) => {
  {
    const as = ["a", "c", "e"];
    const bs = ["b", "d", "f"];
    const actual = zip(as)(bs);
    const expected = ["a", "b", "c", "d", "e", "f"];
    assert({ actual, expected });
  }

  {
    const as = ["a", "c", "e"];
    const bs = ["b", "d"];
    const actual = zip(as)(bs);
    const expected = ["a", "b", "c", "d", "e"];
    assert({ actual, expected });
  }

  {
    const as = ["a", "c"];
    const bs = ["b", "d", "f"];
    const actual = zip(as)(bs);
    const expected = ["a", "b", "c", "d", "f"];
    assert({ actual, expected });
  }

  {
    const as: string[] = [];
    const bs = ["b", "d", "f"];
    const actual = zip(as)(bs);
    const expected = ["b", "d", "f"];
    assert({ actual, expected });
  }

  {
    const as = ["a", "c", "e"];
    const bs: string[] = [];
    const actual = zip(as)(bs);
    const expected = ["a", "c", "e"];
    assert({ actual, expected });
  }
});
