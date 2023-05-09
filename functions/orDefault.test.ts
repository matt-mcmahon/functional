import { assertEquals } from "testing";
import { orDefault } from "./orDefault.ts";

Deno.test("orDefault", () => {
  const defaultValue = "defualt";
  const or = orDefault(defaultValue);

  const data: [string | null | undefined, string | null | undefined][] = [
    ["actual", "actual"],
    [null, defaultValue],
    [undefined, defaultValue],
    ["", ""],
  ];

  for (const [value, expected] of data) {
    assertEquals(or(value), expected);
  }
});
