import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { reduceRight } from "./reduceRight.ts";

Deno.test("reduceRight", () => {
  {
    const add = (x: number, y: number) => x + y;
    assertEquals(
      reduceRight(add)(0)([1, 3, 5]),
      9,
    );
  }

  const a = "a";
  const b = "b";
  const c = "c";
  const concat = (x: string, y: string) => x + y;

  assertEquals(
    reduceRight(concat)(a)([c, b]),
    "abc",
  );

  assertEquals(
    reduceRight(concat)(a)([]),
    a,
  );

  const unreducable = reduceRight((_a: string, _b: string) => {
    throw Error("I should not be called");
  })(a);

  assertEquals(unreducable([]), a);
});
