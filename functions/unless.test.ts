import { assertEquals } from "testing";
import { unless } from "./unless.ts";

Deno.test("unless", () => {
  type A = "A";
  type B = "B";
  const isA = (v: unknown): v is A => v === "A";
  const makeB = (_v: unknown): B => "B";
  const unless_isA_makeB = unless(isA)(makeB);

  assertEquals(
    unless_isA_makeB("C"),
    "B",
  );

  assertEquals(
    unless_isA_makeB("A"),
    "A",
  );

  const inc = (n: number) => n + 1;
  const isNotSafe = (n: number): n is number =>
    n >= Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER;
  const unlessNotSafe = unless(isNotSafe);
  const saferInc = unlessNotSafe(inc);

  assertEquals(
    saferInc(Number.MAX_SAFE_INTEGER),
    Number.MAX_SAFE_INTEGER,
  );

  assertEquals(
    saferInc(1),
    2,
  );
});
