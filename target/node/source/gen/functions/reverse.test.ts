import { reverse } from "./reverse";
import { describe } from "../../lib/describe";

describe("reverse", ({ assert }) => {
  {
    const value = [1, 2, 3, 4];
    const actual = reverse(value);
    const expected = [4, 3, 2, 1];
    assert({ actual, expected, value });
  }

  {
    const actual = [1, 2, 3, 4];
    reverse(actual);
    const expected = [1, 2, 3, 4];
    const message = `reversing as shouldn't modify as`;
    assert({ actual, expected, message });
  }
});
