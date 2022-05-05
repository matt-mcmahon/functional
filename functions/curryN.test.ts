import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { curryN } from "./curryN.ts";

Deno.test("curry-n", async (t) => {
  const join = (...xs: string[]) => {
    return xs.reduce((x, y) => x + y, "");
  };

  const [a, b, c, d, e] = ["a", "b", "c", "d", "e"];

  const curryF = curryN(3);
  const join0 = curryF(join);

  assertEquals(join0.name, "join0");
  assertEquals(join0.length, 3);
  assertEquals(join0(a)(b)(c), "abc");
  assertEquals(join0(a, b)(c), "abc");
  assertEquals(join0(a)(b, c), "abc");
  assertEquals(join0(a, b, c), "abc");

  const join1 = join0(a);

  assertEquals(join1.name, "join1");
  assertEquals(join1.length, 2);

  const join2 = join1(b);

  assertEquals(join2.name, "join2");
  assertEquals(join2.length, 1);
  assertEquals(join2(c), "abc");

  const join3 = join2(c);

  assertEquals(join3, "abc");

  await t.step(
    `should ignore extra arguments, ${d} and ${e}`,
    () => {
      assertEquals(join0(a)(b, c, d, e), "abc");
      assertEquals(join0(a)(b)(c, d, e), "abc");
      assertEquals(join0(a, b)(c, d, e), "abc");
      assertEquals(join0(a, b, c, d, e), "abc");

      assertEquals(join1(b)(c), "abc");
      assertEquals(join1(b, c), "abc");
      assertEquals(join1(b)(c, d, e), "abc");
      assertEquals(join1(b, c, d, e), "abc");

      assertEquals(join2(c, d, e), "abc");
    },
  );
});
