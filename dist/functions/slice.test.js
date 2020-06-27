"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const slice_1 = require("./slice");
sign_1.describe("slice", async ({ assert, inspect }) => {
    test(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"]);
    test("abcde", ["a", "b", "c", "d", "e"]);
    test(new Map([
        ["0", "a"],
        ["1", "b"],
        ["2", "c"],
        ["3", "d"],
        ["4", "e"],
    ]), [
        ["0", "a"],
        ["1", "b"],
        ["2", "c"],
        ["3", "d"],
        ["4", "e"],
    ]);
    test(new Set(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d", "e"]);
    function test(as, bs) {
        assert({
            expected: bs.slice(1, 4),
            actual: slice_1.slice(1)(4)(as),
        });
        assert({
            expected: bs.slice(2, -1),
            actual: slice_1.slice(2)(-1)(as),
        });
        assert({
            expected: bs.slice(2),
            actual: slice_1.slice(2)()(as),
        });
        assert({
            expected: bs.slice(2, 100),
            actual: slice_1.slice(2)(100)(as),
        });
        assert({
            expected: bs.slice(),
            actual: slice_1.slice()()(as),
        });
    }
});
//# sourceMappingURL=slice.test.js.map