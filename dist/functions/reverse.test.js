"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverse_1 = require("./reverse");
const sign_1 = require("@mwm/sign");
sign_1.describe("reverse", ({ assert }) => {
    {
        const value = [1, 2, 3, 4];
        const actual = reverse_1.reverse(value);
        const expected = [4, 3, 2, 1];
        assert({ actual, expected, value });
    }
    {
        const actual = [1, 2, 3, 4];
        reverse_1.reverse(actual);
        const expected = [1, 2, 3, 4];
        const message = `reversing as shouldn't modify as`;
        assert({ actual, expected, message });
    }
});
//# sourceMappingURL=reverse.test.js.map