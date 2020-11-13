"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const slice_1 = require("./slice");
describe_1.describe("slice", async ({ assert }) => {
    {
        const value = [0, 1, 2, 3, 4];
        {
            const actual = slice_1.slice(1)(4)(value);
            const expected = [1, 2, 3];
            assert({ actual, expected, value });
        }
        {
            const actual = value.slice(1, 4);
            const expected = [1, 2, 3];
            assert({ actual, expected, value });
        }
    }
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