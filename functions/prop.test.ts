import { prop } from "./prop.ts";
import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";

Deno.test("prop, explicit", () => {
  const getA = prop("a");

  {
    const value = { a: "A", b: "B" };
    assertEquals(getA(value), "A");
  }

  {
    const value = { a: "A", b: "B" };
    assertEquals(getA(value), "A");
  }

  {
    const value = { b: "B" };
    //@ts-ignore INTENTIONAL ERROR
    assertEquals(getA(value), undefined);
  }
});

Deno.test("prop, inferred", () => {
  assertEquals(
    prop("a")({ a: 1 }),
    1,
  );

  assertEquals(
    prop("foo")({ foo: "foo" }),
    "foo",
  );

  assertEquals(
    typeof prop("toString")(7),
    "function",
  );

  assertEquals(
    typeof prop("valueOf")(7),
    "function",
  );

  assertEquals(
    typeof prop("toString")("7"),
    "function",
  );

  assertEquals(
    typeof prop("valueOf")("7"),
    "function",
  );

  const value = { is: 7 };
  assertEquals(
    typeof prop("toString")(value),
    "function",
  );

  assertEquals(
    //@ts-expect-error #todo: this may be an edge case not worth fixing
    typeof prop("toString")({ is: 7 }),
    "function",
  );
});

Deno.test("prop, missing propertyKey", () => {
  assertEquals(
    //@ts-ignore INTENTIONAL ERROR
    prop("b")({ a: "a" }),
    undefined,
  );

  assertEquals(
    //@ts-ignore INTENTIONAL ERROR
    prop("foo")({ bar: "bar" }),
    undefined,
  );
});
