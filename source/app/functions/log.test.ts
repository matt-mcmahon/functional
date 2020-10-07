import { describe } from "../../lib/describe.ts";
import { log } from "./log.ts";

describe("log", ({ assert, inspect }) => {
  const value = 4;
  const message = inspect`the value is...`;
  const actual = log(message)(value);
  const expected = value;
  const given = inspect`log(${message})(${value})`;
  const should = inspect`should return ${value}`;
  assert({ actual, expected, given, should });
});
