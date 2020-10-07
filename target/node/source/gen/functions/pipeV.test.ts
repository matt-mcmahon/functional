import { describe } from "../../lib/describe";
import { pipeV } from "./pipeV";

describe("pipeV", async ({ assert, inspect }) => {
  const f = (x: number) => x + 1;
  const g = (x: number) => 2 * x;
  {
    const given = inspect`pipeV(${3}, ${f}, ${g})`;
    const should = inspect`have order of operation "${2} × (x + ${1}) = ${8}"`;
    const actual = pipeV(3)(f, g);
    const expected = 8;
    assert({ given, should, actual, expected });
  }
  {
    const given = inspect`pipeV(${3})(${f}, ${g})`;
    const should = inspect`have order of operation "${2} × (x + ${1}) = ${8}"`;
    const actual = pipeV(3)(f, g);
    const expected = 8;
    assert({ given, should, actual, expected });
  }
  {
    const given = inspect`pipeV(${3})(${f}, ${g})`;
    const should = inspect
      `not have order of operation "(${2} × x) + ${1}) = ${7}"`;
    const actual = pipeV(3)(f, g) !== 7;
    const expected = true;
    assert({ given, should, actual, expected });
  }
});
