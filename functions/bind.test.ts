import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { bind } from "./bind.ts";

Deno.test("bind", () => {
  type Foo = {
    method(foo?: string): string;
    foo?: string;
  };

  const methodSource: Foo = {
    foo: "original",
    method(value: string) {
      this.foo = value;
      return `method called`;
    },
  };

  const bind1 = bind(methodSource.method);

  assertEquals(
    typeof bind1,
    "function",
    `should return a function (1 applied arguments)`,
  );

  const bindTarget = {
    bar: "bar",
  };

  const bind2 = bind1(bindTarget);

  assertEquals(
    typeof bind2,
    "function",
    `should return a function (2 applied arguments)`,
  );

  const methodWasInvoked = bind2("foo");

  assertEquals(
    methodWasInvoked,
    "method called",
    `should call method with argument "foo"`,
  );

  assertEquals(
    bindTarget,
    { bar: "bar", foo: "foo" },
    `should mutate the target object`,
  );

  assertEquals(
    methodSource.foo,
    "original",
    `should not mutate the original object that held the method`,
  );

  {
    const newObject = { misdirection: bind2 };
    newObject.misdirection("BAZ");
    assertEquals(
      newObject,
      { misdirection: bind2 },
      `should not mutate new object if added as property of that object`,
    );
  }

  {
    class Foo {
      foo: string;
      getFoo: () => string;
      constructor(foo: string) {
        this.foo = foo;
        this.getFoo = () => this.foo;
      }
    }

    const fooIsFoo = new Foo("foo");
    const fooIsError = new Foo("error");

    const shouldFromFooIsFoo = bind(fooIsFoo.getFoo)(fooIsError);

    assertEquals(
      shouldFromFooIsFoo(),
      "foo",
      `should not change context of arrow functions`,
    );
  }
});
