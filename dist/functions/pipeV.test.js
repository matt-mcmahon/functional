"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const pipeV_1 = require("./pipeV");
sign_1.describe("pipeV", async ({ assert, inspect }) => {
    const f = (x) => x + 1;
    const g = (x) => 2 * x;
    {
        const given = inspect `pipeV(${3}, ${f}, ${g})`;
        const should = inspect `have order of operation "${2} × (x + ${1}) = ${8}"`;
        const actual = pipeV_1.pipeV(3)(f, g);
        const expected = 8;
        assert({ given, should, actual, expected });
    }
    {
        const given = inspect `pipeV(${3})(${f}, ${g})`;
        const should = inspect `have order of operation "${2} × (x + ${1}) = ${8}"`;
        const actual = pipeV_1.pipeV(3)(f, g);
        const expected = 8;
        assert({ given, should, actual, expected });
    }
    {
        const given = inspect `pipeV(${3})(${f}, ${g})`;
        const should = inspect `not have order of operation "(${2} × x) + ${1}) = ${7}"`;
        const actual = pipeV_1.pipeV(3)(f, g) !== 7;
        const expected = true;
        assert({ given, should, actual, expected });
    }
});
