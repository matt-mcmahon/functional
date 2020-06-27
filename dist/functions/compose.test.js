"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("./compose");
const sign_1 = require("@mwm/sign");
sign_1.describe("compose", ({ assert, inspect }) => {
    const double = (x) => x * 2;
    const numToString = (x) => `${x}`;
    const toCharacterArray = (x) => x.split("");
    const joinWithDashes = (x) => x.join("-");
    const c1 = compose_1.compose(joinWithDashes);
    const c2 = c1.from(toCharacterArray);
    const c3 = c2.from(numToString);
    const c4 = c3.from(double);
    {
        const value = ["1", "2", "3", "4", "5"];
        const actual = c1(value);
        const expected = "1-2-3-4-5";
        const given = inspect `c1(${value})`;
        assert({ actual, expected, given });
    }
    {
        const value = "12345";
        const actual = c2.call(value);
        const expected = "1-2-3-4-5";
        const given = inspect `c2(${value})`;
        assert({ actual, expected, given });
    }
    {
        const value = 12345;
        const given = inspect `c3(${value})`;
        const actual = c3(value);
        const expected = "1-2-3-4-5";
        assert({ actual, expected, given });
    }
    {
        const value = 12345;
        const actual = c4(value);
        const expected = "2-4-6-9-0";
        const given = inspect `c4(${value})`;
        assert({ actual, expected, given });
    }
});
//# sourceMappingURL=compose.test.js.map