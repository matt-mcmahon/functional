import { describe } from "@mwm/describe";
import { map, implementation, signatures } from "./map.js";

describe(
  {
    path: "source/map",
    public: [map],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const as = [1, 2, 3];
    const bs = ["1", "2", "3"];
    const fun = (a) => a.toString();

    {
      const expected = bs;
      const actual = map(fun)(as);
      const given = inspect``;
      const should = inspect`Numbers should be mapped to strings`;
      assert({ expected, actual, given, should });
    }

    {
      const expected = [];
      const actual = map(fun)([]);
      const given = inspect``;
      const should = inspect`work with an empty iterable.`;
      assert({ expected, actual, given, should });
    }
  },
);
