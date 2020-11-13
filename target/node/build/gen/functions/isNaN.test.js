"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const isNaN_1 = require("./isNaN");
describe_1.describe("isNaN", async ({ assert, inspect }) => {
    const data = [
        [null, false],
        [undefined, false],
        [NaN, true],
        [0, false],
        [[], false],
        ["", false],
        [false, false],
        [true, false],
        ["truthy", false],
    ];
    data.forEach(([value, expected]) => assert({
        actual: isNaN_1.isNaN(value),
        expected,
        given: inspect `isNil(${value})`,
    }));
});
//# sourceMappingURL=isNaN.test.js.map