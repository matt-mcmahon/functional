"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const init_1 = require("./init");
sign_1.describe("init", async ({ assert, inspect }) => {
    {
        const given = inspect `init(${["a", "b", "c"]})`;
        const actual = init_1.init(["a", "b", "c"]);
        const expected = ["a", "b"];
        assert({ given, actual, expected });
    }
    {
        const given = inspect `init(${["a"]})`;
        const actual = init_1.init(["a"]);
        const expected = [];
        assert({ given, actual, expected });
    }
    {
        const given = inspect `init(${[]})`;
        const expected = [];
        const actual = init_1.init([]);
        assert({ given, actual, expected });
    }
});
//# sourceMappingURL=init.test.js.map