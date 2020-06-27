"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("./map");
const sign_1 = require("@mwm/sign");
sign_1.describe("map", ({ assert, inspect }) => {
    const as = ["1", "2", "3"];
    const bs = [1, 2, 3];
    const ab = (a) => parseInt(a, 10);
    {
        const f = map_1.map(ab);
        const actual = f(as);
        const expected = bs;
        const given = inspect `map(${ab})(${as})`;
        const should = `accept accept an array`;
        assert({ actual, expected, given, should });
    }
    {
        const f = map_1.mapV(ab);
        const actual = f(...as);
        const expected = bs;
        const given = inspect `mapV(${ab})(${1}, ${2}, ${3})`;
        const should = `accept multiple arguments`;
        assert({ actual, expected, given, should });
    }
});
//# sourceMappingURL=map.test.js.map