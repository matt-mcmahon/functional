import { assertEquals } from "testing";
import { flow } from "./flow.ts";

Deno.test("fluent pipe", () => {
  const double = (x: number) => x * 2;
  const numToString = (x: number) => `${x}`;
  const toCharacterArray = (x: string) => x.split("");
  const joinWithDashes = (x: string[]) => x.join("-");

  const p1 = flow(double);
  const p2 = p1.then(numToString);
  const p3 = p2.map(toCharacterArray);
  const p4 = p3.then(joinWithDashes);

  assertEquals(p1(12345), 24690);
  assertEquals(p2(12345), "24690");
  assertEquals(p3.invoke(12345), ["2", "4", "6", "9", "0"]);
  assertEquals(p3.invoker()(12345), ["2", "4", "6", "9", "0"]);
  assertEquals(p4(12345), "2-4-6-9-0");
  assertEquals(p4.invoke(12345), p4(12345));
});
