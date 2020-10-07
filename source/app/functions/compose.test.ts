import { compose } from "./compose.ts";
import { describe } from "../../lib/describe.ts";

describe("classic compose", ({ assert, inspect }) => {
  const double = (x: number) => x * 2;
  const numToString = (x: number) => `${x}`;
  const toCharacterArray = (x: string) => x.split("");
  const joinWithDashes = (x: string[]) => x.join("-");
  const value = 12345;

  const f = compose(joinWithDashes, toCharacterArray, numToString, double);
  const actual = f(value);
  const expected = "2-4-6-9-0";
  const given = inspect
    `compose(joinWithDashes, toCharacterArray, numToString, double)`;

  assert({ actual, expected, given });
});
