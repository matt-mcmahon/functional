import { assertEquals } from "testing";
import { tail } from "./tail.ts";

Deno.test("tail", () => {
  assertEquals<string[]>(
    tail(["a", "b", "c"]),
    ["b", "c"],
  );

  assertEquals<string[]>(
    tail(["a"]),
    [],
  );

  {
    const value: string[] = [];
    assertEquals<string[]>(
      tail(value),
      [],
    );
  }

  assertEquals<string[][]>(
    tail([["a", "b", "c"], ["d", "e"]]),
    [["d", "e"]],
  );

  assertEquals<string[][]>(
    tail([["a", "b", "c"]]),
    [],
  );

  const tuple: [string, number, string] = ["a", 1, "c"];
  assertEquals<[number, string]>(
    //@ts-expect-error #TODO: fix type for tuples
    tail(tuple),
    [1, "c"],
    "should work with tuple values",
  );
});
