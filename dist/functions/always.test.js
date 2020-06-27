"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const always_1 = require("./always");
sign_1.describe("always", async ({ assert, inspect }) => {
    const expected = "bar";
    const alwaysBar = always_1.always(expected);
    const foo = "foo";
    assert({
        actual: alwaysBar(foo),
        expected,
        given: inspect `always(${expected})(${foo})`,
        should: inspect `still return ${expected}`,
    });
});
//# sourceMappingURL=always.test.js.map