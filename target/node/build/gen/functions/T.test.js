"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const T_1 = require("./T");
describe_1.describe("t", async ({ assert, inspect }) => {
    const expected = true;
    assert({
        given: inspect `no argument to ${T_1.T}`,
        should: inspect `return ${true}`,
        actual: T_1.T(),
        expected,
    });
    assert({
        given: inspect `argument ${false} to ${T_1.T}`,
        should: inspect `ignorer argument and return ${true}`,
        actual: T_1.T(false),
        expected,
    });
});
//# sourceMappingURL=T.test.js.map