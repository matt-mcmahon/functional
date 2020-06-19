import { describe } from "@mwm/describe";
import { assoc, implementation, signatures } from "./assoc.js";

describe(
  {
    path: "source/assoc",
    public: [assoc],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const setBar = assoc("bar")("bar");
      const given = inspect`we assoc(${"bar"})(${"bar"})`;
      const expected = {
        foo: "foo",
        bar: "bar",
      };
      const actual = setBar({
        foo: "foo",
      });
      assert({ given, actual, expected });
    }

    assert({
      given: inspect`we use assoc to overwrite ${"b"}`,
      actual: assoc("b")(3)({ a: 1, b: 2 }),
      expected: { a: 1, b: 3 },
    });
  },
);
