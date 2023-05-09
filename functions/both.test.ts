import { assertEquals, assertThrows } from "testing";
import { F } from "./F.ts";
import { T } from "./T.ts";
import { both } from "./both.ts";
import { isNumber } from "./isNumber.ts";
import { toString } from "./toString.ts";

Deno.test("both", () => {
  const gt10 = (v: number) => v > 10;
  const lt20 = (v: number) => v < 20;

  const both0 = both;
  const both1 = both0(gt10);
  const both2 = both1(lt20);

  for (
    const [value, expected] of [
      [10, false],
      [20, false],
      [19, true],
      [11, true],
    ] as [number, boolean][]
  ) {
    assertEquals(
      both2(value),
      expected,
      `${value} ${expected ? "is" : "is not"} between 10 and 20`,
    );
  }

  {
    const throwError = () => {
      throw new Error();
    };

    assertThrows(() => both(T)(throwError)("anything"));

    assertEquals(
      both(F)(throwError)("anything"),
      false,
      "should never execute second condition if first condition is falsy",
    );
  }

  {
    const f = both(isNumber)(toString);
    assertEquals(f(10), "10", `should convert numbers to string`);
    assertEquals(f("bam"), false, `should not convert string`);
  }
});
