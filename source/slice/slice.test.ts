import { describe } from "@mwm/describe";
import { slice, implementation, signatures } from "./slice.ts";

describe(
  {
    path: "source/slice",
    public: [slice],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const test = (as) => {
      const arSlice = (as, m, n) =>
        as.slice ? as.slice(m, n) : [...as].slice(m, n);

      {
        const expected = arSlice(as, 1, 4);
        const actual = slice(1)(4)(as);
        assert({ expected, actual });
      }

      {
        const expected = arSlice(as, 2, -1);
        const actual = slice(2)(-1)(as);
        assert({ expected, actual });
      }

      {
        const expected = arSlice(as, 2);
        const actual = slice(2)()(as);
        assert({ expected, actual });
      }

      {
        const expected = arSlice(as, 2, 100);
        const actual = slice(2)(100)(as);
        assert({ expected, actual });
      }

      {
        const expected = arSlice(as);
        const actual = slice()()(as);
        assert({ expected, actual });
      }

      {
        const expected = arSlice(as, null, null);
        const actual = slice(null)(null)(as);
        assert({ expected, actual });
      }
    };

    const tests = [
      [0, 1, 2, 3, 4],
      "01234",
      new Map([
        ["0", 0],
        ["1", 1],
        ["2", 2],
        ["3", 3],
        ["4", 4],
      ]),
      new Set([0, 1, 2, 3, 4]),
    ];

    tests.forEach(test);
  },
);
