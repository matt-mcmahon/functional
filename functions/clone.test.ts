import { assert, assertEquals, assertNotEquals } from "testing";
import { clone } from "./clone.ts";

Deno.test("clone", async (t) => {
  await t.step("it should clone objects", () => {
    const original = { foo: "foo", bar: "bar" };
    const copy = clone(original);
    assert(original !== copy);
  });

  await t.step(
    "it should not mutate original properties when the clone is mutated",
    () => {
      const original = { foo: "foo", bar: "bar" };
      const copy = clone(original);
      copy.bar = "BAZ";

      assert(original !== copy);
      assertEquals(original.bar, "bar");
      assertEquals(copy.bar, "BAZ");
    },
  );

  await t.step(
    "it should not mutate original deep properties when the clone is mutated",
    () => {
      const original = { foo: "foo", bar: { baz: "baz" } };
      const copy = clone(original);
      copy.bar.baz = "BAZ";

      assert(original.bar !== copy.bar);
      assertEquals(original.bar.baz, "baz");
      assertEquals(copy.bar.baz, "BAZ");
    },
  );

  await t.step("it should clone properties set to undefined", () => {
    const original = { foo: "foo", bar: undefined };
    const copy = clone(original);
    assertEquals(copy, original);
    assertNotEquals(copy, { foo: "foo" });
    assert("bar" in copy);
    assertEquals(copy.bar, undefined);
  });

  await t.step("it should clone null values and properties set to null", () => {
    assertEquals(clone(null), null);

    const original = { foo: "foo", bar: null };
    const copy = clone(original);
    assertEquals(copy, original);
    assert("bar" in copy);
    assertEquals(copy.bar, null);
  });

  await t.step("it should clone undefined", () => {
    assertEquals(clone(undefined), undefined);
  });

  await t.step("it should clone dates", () => {
    const original = new Date(Date.now());
    const copy = clone(original);
    assert(original !== copy);
    assert(copy instanceof Date);
    assertEquals(original, copy);
  });

  await t.step("it should clone arrays", () => {
    const original = [1, 2, 3];
    const copy = clone(original);
    assert(original !== copy);
    assert(Array.isArray(copy));
    assertEquals(original, copy);
  });

  await t.step("it should clone, recursively", () => {
    type A = { a?: A };
    const a: A = {};
    a.a = a;

    type O = Array<A | O>;
    const original: O = [a];
    original.push(original);

    assert(original[0] === a);
    assert(original[1] === original);

    const copy = clone(original);
    assert(original !== copy);
    assert(copy[0] !== a);
    assert(original[1] === original);
  });
});
