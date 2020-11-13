"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toUnary_1 = require("./toUnary");
const describe_1 = require("../../lib/describe");
describe_1.describe("to-unary", ({ assert, inspect }) => {
    {
        const vf = (s, f, ...ns) => `${s} is ${f(...ns)}`;
        const uf = toUnary_1.toUnary(vf);
        const values = ["max", Math.max, 1, 2, 3];
        const actual = uf(["max", Math.max, 1, 2, 3]);
        const expected = "max is 3";
        const given = inspect `unary(${values})`;
        assert({ actual, expected, given });
    }
    {
        const vf = (...ns) => `${Math.max(...ns)}`;
        const uf = toUnary_1.toUnary(vf);
        const values = [1, 2, 3];
        const actual = uf(values);
        const expected = "3";
        const given = inspect `unary(${values})`;
        const should = inspect `evaluate to ${expected}`;
        assert({ actual, expected, given, should });
    }
});
//# sourceMappingURL=toUnary.test.js.map