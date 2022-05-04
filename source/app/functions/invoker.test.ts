// cSpell:ignore ghijklm abcdefghijklm

import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { invoker } from "./invoker.ts";

Deno.test("invoker", () => {
  const target = "abcdefghijklm";

  {
    const slice1 = invoker("slice");
    const slice2 = slice1(6);
    assertEquals(slice2(target), "ghijklm");
  }

  {
    const sliceFrom = invoker("slice")(6, 8);
    assertEquals(sliceFrom(target), "gh");
  }

  {
    const o = {
      x: 1,
      sumX(x2: number, x3: number, x4: number, x5 = 0) {
        return this.x + x2 + x3 + x4 + x5;
      },
    };

    assertEquals(invoker("sumX")(2, 3, 4)(o), 1 + 2 + 3 + 4);
  }
});
