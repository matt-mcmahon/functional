"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const reduceRight_1 = require("./reduceRight");
sign_1.describe("reduceRight", async ({ assert, inspect }) => {
    {
        const add = (x, y) => x + y;
        const value = [1, 3, 5];
        const expected = 9;
        const actual = reduceRight_1.reduceRight(add)(0)(value);
        const given = inspect `reduceRight(${add})(${0})(${value})`;
        assert({ actual, expected, given });
    }
    const a = "a";
    const b = "b";
    const c = "c";
    const concat = (x, y) => x + y;
    {
        const expected = "abc";
        const value = [c, b];
        const actual = reduceRight_1.reduceRight(concat)(a)(value);
        const given = inspect `reduceRight(${concat})(${a})(${value})`;
        assert({ actual, expected, given });
    }
    {
        const expected = "a";
        const value = [];
        const actual = reduceRight_1.reduceRight(concat)(a)(value);
        const given = inspect `reduceRight(${concat})(${a})(${value})`;
        assert({ actual, expected, given });
    }
    {
        const a = "a";
        const thrower = (a, b) => {
            throw Error("I should not be called");
        };
        const unreducable = reduceRight_1.reduceRight(thrower)(a);
        const actual = unreducable([]);
        const expected = a;
        const given = inspect `reduceRight(thrower)(${a})(${[]})`;
        const should = inspect `not throw; yield ${a}`;
        assert({ actual, expected, given, should });
    }
});
//# sourceMappingURL=reduceRight.test.js.map