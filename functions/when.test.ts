import { assertEquals } from "testing";
import { when } from "./when.ts";

Deno.test("when", () => {
  {
    const isA = (v: unknown): v is "A" => v === "A";

    const makeB = (_: "A"): "B" => "B";

    const when_isA_makeB = when(isA)(makeB);

    assertEquals(when_isA_makeB("C"), "C");

    assertEquals(when_isA_makeB("A"), "B");
  }

  {
    const max = Number.MAX_SAFE_INTEGER;
    const min = Number.MIN_SAFE_INTEGER;

    const inc = (n: number) => n + 1;
    const canIncrement = (n: number): n is number => n < max && n >= min;
    const whenCanIncrement = when(canIncrement);
    const saferInc = whenCanIncrement(inc);

    assertEquals(saferInc(max), max);
    assertEquals(saferInc(max - 1), max);
    assertEquals(saferInc(min), min + 1);

    assertEquals(saferInc(1), 2);
  }
});
