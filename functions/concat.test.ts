import { assertEquals } from "testing";
import { concat } from "./concat.ts";

Deno.test("concat", () => {
  {
    const as = ["a", "b", "c"];
    const bs = ["d", "e", "f"];

    const actual: string[] = concat(as)(bs);
    const expected: string[] = [...as, ...bs];

    assertEquals<typeof expected>(
      actual,
      expected,
      "should concat homogeneous typeed arrays",
    );
  }

  {
    type AS = [string, number, { foo: string }];
    type BS = [string, { bar: string }, boolean];

    const as: AS = ["a", 1, { foo: "bar" }];
    const bs: BS = ["b", { bar: "baz" }, true];

    const actual: [...AS, ...BS] = concat(as)(bs);
    const expected: [...AS, ...BS] = [...as, ...bs];

    assertEquals<typeof expected>(
      actual,
      expected,
      "should concat mixed type arrays",
    );
  }
});
