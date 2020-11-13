"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ifElse_1 = require("./ifElse");
const describe_1 = require("../../lib/describe");
describe_1.describe("if-else", ({ assert, inspect }) => {
    {
        const ifEven = (x) => x % 2 === 0;
        const whenEven = (x) => `${x} is even`;
        const whenOdd = (x) => `${x} is odd`;
        const f = ifElse_1.ifElse(ifEven, whenEven, whenOdd);
        {
            const given = inspect `f(${4})`;
            const actual = f(4);
            const expected = "4 is even";
            const should = "should run true branch";
            assert({ actual, expected, given, should });
        }
        {
            const given = inspect `f(${3})`;
            const actual = f(3);
            const expected = `3 is odd`;
            const should = `run false branch`;
            assert({ actual, expected, given, should });
        }
    }
    {
        const isNumber = (n) => typeof n === "number";
        const whenTrue = (n) => n * 2;
        const whenFalse = (n) => `I'm a ${typeof n}`;
        const f = ifElse_1.ifElse(isNumber, whenTrue, whenFalse);
        {
            const given = inspect `f(${2})`;
            const should = `run true branch`;
            const expected = 4;
            const actual = f(2);
            assert({ given, should, actual, expected });
        }
        {
            const given = inspect `f(${"foo"})`;
            const should = `run false branch`;
            const expected = "I'm a string";
            const actual = f("foo");
            assert({ given, should, actual, expected });
        }
        {
            const expected = "I'm a object";
            const actual = f({ bar: "3" });
            const given = inspect `f({ bar: "3" })`;
            const should = `run false branch`;
            assert({ given, should, actual, expected });
        }
    }
});
//# sourceMappingURL=ifElse.test.js.map