"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe_1 = require("./pipe");
const sign_1 = require("@mwm/sign");
sign_1.describe("pipe", ({ assert, inspect }) => {
    const double = (x) => x * 2;
    const numToString = (x) => `${x}`;
    const toCharacterArray = (x) => x.split("");
    const joinWithDashes = (x) => x.join("-");
    const p1 = pipe_1.pipe(double);
    const p2 = p1.then(numToString);
    const p3 = p2.then(toCharacterArray);
    const p4 = p3.then(joinWithDashes);
    const value = 12345;
    assert({
        actual: p1(12345),
        expected: 24690,
        given: inspect `p1(${value})`,
    });
    assert({
        actual: p2(12345),
        expected: "24690",
        given: inspect `p2(${value})`,
    });
    assert({
        actual: p3.call(12345),
        expected: ["2", "4", "6", "9", "0"],
        given: inspect `p3(${value})`,
    });
    assert({
        actual: p4(12345),
        expected: "2-4-6-9-0",
        given: inspect `p4(${value})`,
    });
    assert({
        actual: p4.call(12345),
        expected: p4(12345),
        given: inspect `p4.call(${value})`,
        should: inspect `be the same as p4(${value})`,
    });
});
