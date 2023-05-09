import { assertEquals } from "testing";
import { iife } from "./iife.ts";

Deno.test("iife", () => {
  const f = (a: number, b: number, c: number) => a + b + c;

  assertEquals(iife(f, 1, 3, 5), 9);

  const fun = (a: number, b: number) => {
    const c = a + b;
    return (d: number) => c + d;
  };

  const add4 = iife(fun, 1, 3);

  assertEquals(typeof add4, "function");
  assertEquals(add4(5), 9);
});
