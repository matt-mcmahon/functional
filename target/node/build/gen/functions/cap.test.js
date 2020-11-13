"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cap_1 = require("./cap");
const describe_1 = require("../../lib/describe");
describe_1.describe("cap", ({ assert, inspect }) => {
    {
        const value = "uncapped";
        const actual = cap_1.cap(value);
        const expected = "Uncapped";
        assert({ given: inspect `${value}`, actual, expected });
    }
    {
        const value = "";
        const actual = cap_1.cap(value);
        const expected = "";
        assert({ given: inspect `${value}`, actual, expected });
    }
});
//# sourceMappingURL=cap.test.js.map