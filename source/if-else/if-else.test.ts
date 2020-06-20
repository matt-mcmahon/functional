import { describe } from "@mwm/describe";
import { ifElse, implementation, signatures } from "./if-else.ts";

describe(
  {
    path: "source/ifElse",
    public: [ifElse],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const isTrue = (condition) => condition == true;
    const onTrueCB = (v) => `was ${v}`;
    const onFalseCB = (v) => `was ${v}`;

    const onTrue = ifElse(isTrue);
    const onFalse = onTrue(onTrueCB);
    const final = onFalse(onFalseCB);

    {
      const expected = "was true";
      const given = inspect`ifElse(${isTrue}, ${onTrue}, ${onFalse}, ${true})`;
      const should = inspect`return ${expected}`;
      const actual = final(true);
      assert({ actual, expected, given, should });
    }

    {
      const expected = "was false";
      const given = inspect`ifElse(${isTrue}, ${onTrue}, ${onFalse}, ${false})`;
      const should = inspect`return ${expected}`;
      const actual = final(false);
      assert({ actual, expected, given, should });
    }
  },
);
