import { assertEquals } from "testing";
import { toUnary } from "./toUnary.ts";

Deno.test("to-unary", () => {
  {
    const vf = (s: string, f: (...ns: number[]) => number, ...ns: number[]) =>
      `${s} is ${f(...ns)}`;
    const uf = toUnary(vf);
    const args: Parameters<typeof vf> = ["max", Math.max, 1, 2, 3];
    const expected = "max is 3";

    assertEquals(vf(...args), expected);
    assertEquals(uf(args), expected);
  }
  {
    const vf = (...ns: number[]) => `${Math.max(...ns)}`;
    const uf = toUnary(vf);
    const args: Parameters<typeof vf> = [1, 2, 3];
    const expected = "3";

    assertEquals(vf(...args), expected);
    assertEquals(uf(args), expected);
  }
});
