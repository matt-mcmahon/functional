import { assertEquals } from "testing";
import { tap } from "./tap.ts";

Deno.test("tap", () => {
  assertEquals(
    tap((x: number) => x * 2)(4),
    4,
  );
});
