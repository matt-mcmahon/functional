import { assertEquals } from "testing";
import { map } from "./map.ts";

Deno.test("map", () => {
  const as = ["1", "2", "3"];
  const bs = [1, 2, 3];
  const ab = (a: string) => parseInt(a, 10);

  assertEquals(
    map(ab)(as),
    bs,
  );
});
