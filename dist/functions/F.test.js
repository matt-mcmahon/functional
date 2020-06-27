"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const F_1 = require("./F");
sign_1.describe("f", async ({ assert, inspect }) => {
    const expected = false;
    assert({
        given: inspect `no argument to ${F_1.F}`,
        should: inspect `return ${false}`,
        actual: F_1.F(),
        expected,
    });
    assert({
        given: inspect `argument ${true} to ${F_1.F}`,
        should: inspect `ignorer argument and return ${false}`,
        actual: F_1.F(true),
        expected,
    });
});
//# sourceMappingURL=F.test.js.map