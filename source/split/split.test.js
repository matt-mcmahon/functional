import { describe } from "@mwm/describe"
import { split, implementation, signatures } from "./split"

describe(
  {
    path: "source/split",
    public: [split],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const string = "one two three"
      const char = " "
      const expected = string.split(char)
      const actual = split(char)(string)
      const given = inspect`${string}`
      assert({ expected, actual, given })
    }

    {
      const string = "one, two, three"
      const char = ", "
      const expected = string.split(char)
      const actual = split(char)(string)
      const given = inspect`${string}`
      const should = inspect`split at multiple characters, ${char}`
      assert({ expected, actual, given, should })
    }

    {
      const string = "one two three"
      const char = "-"
      const expected = string.split(char)
      const actual = split(char)(string)
      const given = inspect`a split character, ${char}, not in ${string}`
      assert({ expected, actual, given })
    }

    {
      const string = "one two three"
      const char = ""
      const expected = string.split(char)
      const actual = split(char)(string)
      const given = inspect`a split character, ${char}`
      assert({ expected, actual, given })
    }

    {
      const string = "one two three"
      const expected = string.split()
      const actual = split()(string)
      const given = inspect`no split character`
      assert({ expected, actual, given })
    }

    {
      const string = ""
      const char = " "
      const expected = string.split(char)
      const actual = split(char)(string)
      const given = inspect`an empty string, ${string}`
      const should = inspect`return an empty string`
      assert({ expected, actual, given, should })
    }
  }
)
