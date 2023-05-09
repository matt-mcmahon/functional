import { assertEquals } from "testing";
import { reduceV } from "./reduceV.ts";

Deno.test("reduce", () => {
  const as = ["1", "2", "3"];
  const b = 7;
  const bab = (b: number, a: string) => b + parseInt(a, 10);

  assertEquals(reduceV(bab)(1)(...as), b);
});
