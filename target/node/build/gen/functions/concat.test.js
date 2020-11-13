"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const concat_1 = require("./concat");
describe_1.describe("concat", async ({ assert, inspect }) => {
    const as = ["a", "b", "c"];
    const bs = ["d", "e", "f"];
    {
        const actual = concat_1.concat(as)(bs);
        const expected = [...as, ...bs];
        const given = inspect `concat(${as})(${bs})`;
        assert({ actual, expected, given });
    }
    {
        const as = ["a", 1, { foo: "bar" }];
        const bs = ["b", { bar: "baz" }, true];
        const actual = concat_1.concat(as)(bs);
        const expected = [...as, ...bs];
        const given = inspect `concat(${as})(${bs})`;
        assert({ actual, expected, given });
    }
});
//# sourceMappingURL=concat.test.js.map