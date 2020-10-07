import { describe } from "../../lib/describe";
import { partial } from "./partial";

describe("partial", async ({ assert, inspect }) => {
  const f = (a: string, b: string, c: string, d: string) => a + b + c + d;

  {
    const given = f.toString();
    const should = inspect`have a length of ${4}`;
    const actual = f.length;
    const expected = 4;
    assert({ given, should, actual, expected });
  }

  const [a, b, c, d] = ["a", "b", "c", "d"];
  const f_AB = partial(a, b)(f);

  const given = inspect`(${a}, ${b}, c, d) => ${a} + ${b} + c + d`;

  {
    const expected = "function";
    const actual = typeof f_AB;
    const should = inspect`be a ${expected}`;
    assert({ expected, actual, given, should });
  }

  {
    const expected = "abcd";
    const actual = f_AB(c, d);
    assert({ expected, actual, given });
  }

  {
    const f_ABC = partial(c)(f_AB);
    const actual = f_ABC(d);
    const expected = a + b + c + d;
    const given = inspect`two partial applications, ([${a}, ${b}]), ([${c}])`;
    assert({ expected, actual, given });
  }
});
