import { assertEquals } from "testing";
import { ifElse } from "./ifElse.ts";

Deno.test("if-else", () => {
  {
    const ifEven = (x: number) => x % 2 === 0;
    const whenEven = (x: number) => `${x} is even`;
    const whenOdd = (x: number) => `${x} is odd`;

    const f = ifElse(ifEven, whenEven, whenOdd);

    assertEquals(f(4), "4 is even");
    assertEquals(f(3), `3 is odd`);
  }

  {
    const isNumber = (n: unknown) => typeof n === "number";
    const whenTrue = (n: number) => n * 2;
    const whenFalse = (n: unknown) => `I'm a ${typeof n}`;

    const f = ifElse(isNumber, whenTrue, whenFalse);

    assertEquals(4, f(2));
    assertEquals(f("foo"), "I'm a string");
    assertEquals(f({ bar: "3" }), "I'm a object");
  }
});
