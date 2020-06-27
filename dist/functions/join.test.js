"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const join_1 = require("./join");
sign_1.describe("join", async ({ assert, inspect }) => {
    {
        const char = "-";
        const f = join_1.join(char);
        const list = ["a", "b", "c"];
        const actual = f(list);
        const expected = "a-b-c";
        const given = inspect `join(${char})(${list})`;
        const should = inspect `be ${expected}`;
        assert({ given, should, actual, expected });
    }
});
//# sourceMappingURL=join.test.js.map