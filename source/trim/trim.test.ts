import { describe } from "@mwm/describe";
import { trim, implementation, signatures } from "./trim.ts";

describe(
  {
    path: "source/trim",
    public: [trim],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const value = "  \n   foo  \n   ";
      const expected = "foo";
      const actual = trim(value);
      const given = inspect`trim(${value})`;
      assert({ expected, actual, given });
    }

    {
      const expected = "5";
      const actual = trim(5);
      const given = inspect`trim(${5})`;
      assert({ expected, actual, given });
    }
  },
);
