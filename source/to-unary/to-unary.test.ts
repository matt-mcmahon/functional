import { describe } from "@mwm/describe";
import { toUnary, implementation, signatures } from "./to-unary.ts";

describe(
  {
    path: "source/toUnary",
    public: [toUnary],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const args = [1, 2, 3];
      const variadicSum = (...ns) => ns.reduce((x, y) => x + y, 0);
      const unarySum = toUnary(variadicSum);

      assert({
        actual: variadicSum(...args),
        expected: 6,
        given: inspect`${variadicSum}(${args})`,
      });

      assert({
        expected: variadicSum(...args),
        actual: unarySum(args),
        given: inspect`toUnary(variadicSum)(${args})`,
        should: inspect`be equivalent to variadicSum(` +
          `${args.map((v) => inspect`${v}`).join(", ")})`,
      });
    }
  },
);
