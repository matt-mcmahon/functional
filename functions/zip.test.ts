import { assertEquals } from "testing";
import { zip } from "./zip.ts";

Deno.test("zip", () => {
  {
    const as = ["a", "c", "e"];
    const bs = ["b", "d", "f"];
    const actual = zip(as)(bs);
    const expected = ["a", "b", "c", "d", "e", "f"];
    assertEquals(actual, expected);
  }

  {
    const as = ["a", "c", "e"];
    const bs = ["b", "d"];
    const actual = zip(as)(bs);
    const expected = ["a", "b", "c", "d", "e"];
    assertEquals(actual, expected);
  }

  {
    const as = ["a", "c"];
    const bs = ["b", "d", "f"];
    const actual = zip(as)(bs);
    const expected = ["a", "b", "c", "d", "f"];
    assertEquals(actual, expected);
  }

  {
    const as: string[] = [];
    const bs = ["b", "d", "f"];
    const actual = zip(as)(bs);
    const expected = ["b", "d", "f"];
    assertEquals(actual, expected);
  }

  {
    const as = ["a", "c", "e"];
    const bs: string[] = [];
    const actual = zip(as)(bs);
    const expected = ["a", "c", "e"];
    assertEquals(actual, expected);
  }
});
