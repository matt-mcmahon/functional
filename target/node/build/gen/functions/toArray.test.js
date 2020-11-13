"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const toArray_1 = require("./toArray");
describe_1.describe("to-string", async ({ assert, inspect }) => {
    const values = [
        [
            ["a", "b", "c", "d", "e"],
            ["a", "b", "c", "d", "e"],
        ],
        ["abcde", ["a", "b", "c", "d", "e"]],
        [new Set(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d", "e"]],
    ];
    const test = ([value, expected]) => {
        assert({
            given: inspect `toArray(${value})`,
            actual: toArray_1.toArray(value),
            expected,
        });
    };
    values.forEach(test);
});
//# sourceMappingURL=toArray.test.js.map