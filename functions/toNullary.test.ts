import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { toNullary } from "./toNullary.ts";

Deno.test("to-nullary", () => {
  {
    const vF = (
      s: string,
      f: (...ns: number[]) => number,
      ...ns: number[]
    ) => `${s} is ${f(...ns)}`;

    const nF = toNullary(vF, "max", Math.max, 1, 2, 3);
    const actual = nF();
    const expected = "max is 3";

    assertEquals(actual, expected);
  }
  // {
  //   const vf = (...ns: number[]) => `${Math.max(...ns)}`;
  //   const uf = toNullary(vf);
  //   const args: Parameters<typeof vf> = [1, 2, 3];
  //   const expected = "3";

  //   assertEquals(vf(...args), expected);
  //   assertEquals(uf(args), expected);
  // }
});
