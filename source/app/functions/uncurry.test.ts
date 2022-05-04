import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { uncurry } from "./uncurry.ts";

Deno.test("uncurry", () => {
  {
    const curried = (x: number) => (y: number) => (z: number) => x + y + z;
    const variadic = uncurry(3)(curried);
    assertEquals(
      variadic(1, 2, 3),
      curried(1)(2)(3),
    );
  }
  {
    const curried = (n: number) => (a: string) => a.repeat(n);
    const variadic = uncurry(2)(curried);
    assertEquals(
      variadic(1, "baa "),
      curried(1)("baa "),
    );
  }
});
