import { assertEquals } from "testing";
import { cap } from "./cap.ts";

// spell-checker:ignore 𝑨𝑩𝑪 𝑎𝑩𝑪

Deno.test("cap", () => {
  assertEquals(cap("uncapped"), "Uncapped");
  assertEquals(cap(""), "");
  assertEquals(cap("😏"), "😏");
  assertEquals(cap("😏ing"), "😏ing");
  assertEquals(cap("👉🏿"), "👉🏿");
  assertEquals(cap("a\nb"), "A\nb");
  assertEquals(cap("\na\nb"), "\na\nb");
  {
    const actual = cap("𝑨𝑩𝑪");
    const expected = "𝑨𝑩𝑪";
    assertEquals(actual, expected);
  }
  {
    const actual = cap("𝑎𝑩𝑪");
    const expected = "𝑎𝑩𝑪";
    assertEquals(actual, expected);
  }
});
