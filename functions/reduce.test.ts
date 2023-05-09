import { assertEquals } from "testing";
import { reduce } from "./reduce.ts";

Deno.test("reduce", () => {
  const as = ["1", "2", "3"];
  const b = 7;
  const bab = (b: number, a: string) => b + parseInt(a, 10);

  assertEquals(reduce(bab)(1)(as), b);
});
