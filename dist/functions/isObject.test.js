"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const isObject_1 = require("./isObject");
sign_1.describe("isObject", async ({ assert, inspect }) => {
    const data = [
        [1, false],
        [0, false],
        [NaN, false],
        [-Infinity, false],
        [+Infinity, false],
        [undefined, false],
        ["", false],
        [[], true],
        [false, false],
        [{}, true],
        [{ length: 0 }, true],
        [() => { }, false],
    ];
    const test = ([value, expected]) => {
        const actual = isObject_1.isObject(value);
        const given = inspect `isObject(${value})`;
        assert({ given, actual, expected });
    };
    data.forEach(test);
});
//# sourceMappingURL=isObject.test.js.map