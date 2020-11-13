"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const F_1 = require("./F");
describe_1.describe("f", async ({ assert, inspect }) => {
    const expected = false;
    assert({
        given: inspect `no argument to ${F_1.F}`,
        should: inspect `return ${false}`,
        actual: F_1.F(),
        expected,
    });
    assert({
        given: inspect `argument ${true} to ${F_1.F}`,
        should: inspect `ignore argument and return ${false}`,
        actual: F_1.F(true),
        expected,
    });
    assert({
        given: inspect `argument ${"foo"}, ${"bar"} to ${F_1.F}`,
        should: inspect `ignore arguments and return ${false}`,
        actual: F_1.F("foo", "bar"),
        expected,
    });
});
//# sourceMappingURL=F.test.js.map