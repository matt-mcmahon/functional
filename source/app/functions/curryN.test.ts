import { describe } from "../../lib/remote/describe.ts";
import { curryN } from "./curryN.ts";

describe("curry-n", async ({ assert, inspect }) => {
  const join = (...xs: string[]) => {
    return xs.reduce((x, y) => x + y, "");
  };
  const [a, b, c, d, e] = ["a", "b", "c", "d", "e"];

  const curryF = curryN(3);
  const join0 = curryF(join);

  {
    const actual = join0.name;
    const expected = "join0";
    const given = inspect`join0.name`;
    assert({ given, actual, expected });
  }

  {
    const actual = join0.length;
    const expected = 3;
    const given = inspect`join0.length`;
    assert({ given, actual, expected });
  }

  {
    const expected = "abc";
    const actual = join0(a)(b)(c);
    const given = inspect`join0(${a})(${b})(${c})`;
    assert({ actual, expected, given });
  }

  {
    const given = inspect`join0(${a}, ${b}, ${c}, ${d}, ${e})`;
    const actual = join0(a, b, c, d, e);
    const expected = "abc";
    assert({ actual, expected, given });
  }

  {
    const expected = "abc";
    const actual = join0(a)(b, c);
    const given = inspect`join0(${a})(${b}, ${c})`;
    assert({ actual, expected, given });
  }

  {
    const expected = "abc";
    const actual = join0(a, b)(c);
    const given = inspect`join0(${a}, ${b})(${c})`;
    assert({ actual, expected, given });
  }

  const join1 = join0(a);

  {
    const given = inspect`join1.name`;
    const actual = join1.name;
    const expected = "join1";
    assert({ actual, expected, given });
  }

  {
    const given = inspect`join1.length`;
    const actual = join1.length;
    const expected = 2;
    assert({ given, actual, expected });
  }

  {
    const given = inspect`join1(${b}, ${c}, ${d}, ${e})`;
    const should = inspect`ignore arguments ${d} and ${e}`;
    const actual = join1(b, c, d, e);
    const expected = "abc";
    assert({ given, should, actual, expected });
  }

  const join2 = join1(b);

  {
    const given = inspect`join2.name`;
    const actual = join2.name;
    const expected = "join2";
    assert({ actual, expected, given });
  }

  {
    const given = inspect`join2.length`;
    const actual = join2.length;
    const expected = 1;
    assert({ given, actual, expected });
  }

  {
    const given = inspect`join2(${c}, ${d}, ${e})`;
    const should = inspect`ignore arguments ${d} and ${e}`;
    const actual = join2(c, d, e);
    const expected = "abc";
    assert({ given, should, actual, expected });
  }

  const join3 = join2(c);

  {
    const actual = join3;
    const expected = "abc";
    const given = inspect`join2(${c})`;
    assert({ actual, expected, given });
  }

  {
    const given = inspect`join2(${c}, ${d}, ${e})`;
    const should = inspect`ignore arguments ${d} and ${e}`;
    const actual = join2(c, d, e);
    const expected = "abc";
    assert({ given, should, actual, expected });
  }
});
