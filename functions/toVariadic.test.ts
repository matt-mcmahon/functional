import { assertEquals } from "testing";
import { toVariadic } from "./toVariadic.ts";

Deno.test("toVariadic", () => {
  {
    const uf = (ns: number[]) => `${Math.min(...ns)}`;
    const vf = toVariadic(uf);
    assertEquals(vf(...[3, 2, 1]), "1");
  }

  {
    const unary = (
      args: [string, (...ns: number[]) => number, ...number[]],
    ) => {
      const [s, f, ...ns] = args;
      return `${s} is ${f(...ns)}`;
    };
    const variadic = toVariadic(unary);
    assertEquals(variadic("min", Math.min, 3, 2, 1), "min is 1");
  }

  {
    const args = [1, 2, 3];
    const unarySum = (ns: number[]) => ns.reduce((x, y) => x + y, 0);
    const variadicSum = toVariadic(unarySum);

    assertEquals(unarySum(args), 6);
    assertEquals(variadicSum(...args), unarySum(args));
  }
});
