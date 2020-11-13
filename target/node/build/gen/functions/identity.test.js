"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const identity_1 = require("./identity");
describe_1.describe("identity", async ({ assert, inspect }) => {
    const foo = { name: "foo" };
    {
        const given = inspect `identity(${foo})`;
        const should = inspect `return ${foo}`;
        const actual = identity_1.identity(foo);
        const expected = foo;
        assert({ given, should, actual, expected });
    }
});
//# sourceMappingURL=identity.test.js.map