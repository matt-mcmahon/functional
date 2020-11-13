"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const isNil_1 = require("./isNil");
describe_1.describe("isNil", async ({ assert, inspect }) => {
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