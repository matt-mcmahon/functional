import { describe } from "@mwm/describe";
import { defaultTo, signatures, implementation } from "./default-to.ts";

describe(
  {
    path: "source/defaultTo",
    public: [defaultTo],
    private: [signatures, implementation],
  },
  async ({ assert, inspect }) => {
    const f = defaultTo("default");
    {
      const expected = false;
      const actual = f(false);
      const given = inspect``;
      const should = inspect`false is not replaced, got "${actual}"`;
      assert({ given, should, actual, expected });
    }

    {
      const expected = 0;
      const actual = f(0);
      const given = inspect``;
      const should = inspect`zero (0) is not replaced, got "${actual}"`;
      assert({ given, should, actual, expected });
    }

    {
      const expected = "default";
      const actual = f(null);
      const given = inspect``;
      const should = inspect`null is replaced, got "${actual}"`;
      assert({ given, should, actual, expected });
    }

    {
      const expected = "default";
      const actual = f(undefined);
      const given = inspect``;
      const should = inspect`undefined is replaced, got "${actual}"`;
      assert({ given, should, actual, expected });
    }

    {
      const expected = "default";
      const actual = f(NaN);
      const given = inspect``;
      const should = inspect`NaN is replaced, got "${actual}"`;
      assert({ given, should, actual, expected });
    }

    const defaultTo42 = defaultTo(42);

    {
      const expected = 42;
      const actual = defaultTo42(null);
      const given = inspect``;
      const should = inspect`be "${expected}", got "${actual}"`;
      assert({ given, should, actual, expected });
    }

    {
      const expected = 42;
      const actual = defaultTo42(undefined);
      const given = inspect``;
      const should = inspect`be "${expected}", got "${actual}"`;
      assert({ given, should, actual, expected });
    }

    {
      const expected = false;
      const actual = defaultTo42(false);
      const given = inspect``;
      const should = inspect`be "${expected}", got "${actual}"`;
      assert({ given, should, actual, expected });
    }

    {
      const expected = "Functional";
      const actual = defaultTo42("Functional");
      const given = inspect``;
      const should = inspect`be "${expected}", got "${actual}"`;
      assert({ given, should, actual, expected });
    }

    {
      const expected = 42;
      const actual = defaultTo42(parseInt("string"));
      const given = inspect``;
      const should = inspect`be "${expected}", got "${actual}"`;
      assert({ given, should, actual, expected });
    }
  },
);
