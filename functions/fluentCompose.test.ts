import { assertEquals } from "testing";
import { fluentCompose } from "./fluentCompose.ts";

Deno.test("fluent compose", () => {
  const double = (x: number) => x * 2;
  const numToString = (x: number) => `${x}`;
  const toCharacterArray = (x: string) => x.split("");
  const joinWithDashes = (x: string[]) => x.join("-");

  const c1 = fluentCompose(joinWithDashes);
  const c2 = c1.after(toCharacterArray);
  const c3 = c2.after(numToString);
  const c4 = c3.after(double);

  assertEquals(
    c1(["1", "2", "3", "4", "5"]),
    "1-2-3-4-5",
  );

  assertEquals(
    c1.invoke(["1", "2", "3", "4", "5"]),
    "1-2-3-4-5",
  );

  assertEquals(
    c2("12345"),
    "1-2-3-4-5",
  );

  assertEquals(
    c2.invoke("12345"),
    "1-2-3-4-5",
  );

  assertEquals(
    c3(12345),
    "1-2-3-4-5",
  );

  assertEquals(
    c3.invoke(12345),
    "1-2-3-4-5",
  );

  assertEquals(
    c4(12345),
    "2-4-6-9-0",
  );

  assertEquals(
    c4.invoke(12345),
    "2-4-6-9-0",
  );
});
