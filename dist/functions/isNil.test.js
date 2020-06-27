"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const isNil_1 = require("./isNil");
sign_1.describe("isNil", async ({ assert, inspect }) => {
    const data = [
        [null, true],
        [undefined, true],
        [NaN, false],
        [0, false],
        [[], false],
        ["", false],
        [false, false],
        [true, false],
        ["truthy", false],
    ];
    data.forEach(([value, expected]) => assert({
        actual: isNil_1.isNil(value),
        expected,
        given: inspect `isNil(${value})`,
    }));
});
//# sourceMappingURL=isNil.test.js.map