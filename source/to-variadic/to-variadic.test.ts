import { describe } from "@mwm/describe";
import { toVariadic, implementation, signatures } from "./to-variadic.ts";

describe(
  {
    path: "source/toVariadic",
    public: [toVariadic],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const args = [1, 2, 3];
    const unarySum = (ns) => ns.reduce((x, y) => x + y, 0);
    const variadicSum = toVariadic(unarySum);
    const s = `(${args.map((v) => inspect`${v}`).join(", ")})`;

    assert({
      actual: unarySum(args),
      expected: 6,
      given: inspect`${unarySum}(${args})`,
    });

    assert({
      expected: unarySum(args),
      actual: variadicSum(...args),
      given: inspect`toVariadic(${unarySum})(${args})`,
      should: inspect`be equivalent to ${unarySum}` + s,
    });
  },
);
