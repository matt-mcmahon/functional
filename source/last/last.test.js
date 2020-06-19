import { describe } from "@mwm/describe";
import { last, implementation, signatures } from "./last.js";

describe(
  {
    path: "source/last",
    public: [last],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const value = ["a", "b", "c"];
      const expected = "c";
      const actual = last(value);
      const given = inspect`last(${value})`;
      assert({ given, actual, expected });
    }

    {
      const value = [];
      const expected = undefined;
      const actual = last(value);
      const given = inspect`last(${value})`;
      assert({ given, actual, expected });
    }
  },
);
