import { assertEquals } from "testing";
import { mapV } from "./mapV.ts";

Deno.test("map", () => {
  assertEquals(
    mapV((a: string) => parseInt(a, 10))(...["1", "2", "3"]),
    [1, 2, 3],
  );
});
