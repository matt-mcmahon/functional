import { describe } from "../../lib/describe.ts";
import { identity } from "./identity.ts";

describe("identity", async ({ assert, inspect }) => {
  const foo = { name: "foo" };
  {
    const given = inspect`identity(${foo})`;
    const should = inspect`return ${foo}`;
    const actual = identity(foo);
    const expected = foo;
    assert({ given, should, actual, expected });
  }
});
