// deno-fmt-ignore-file
// @ts-nocheck
/* eslint-disable */
// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiateAsync, __instantiate;

(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };

  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }

  __instantiateAsync = async (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExpA(m);
  };

  __instantiate = (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExp(m);
  };
})();

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/** A module to print ANSI terminal colors. Inspired by chalk, kleur, and colors
 * on npm.
 *
 * ```
 * import { bgBlue, red, bold } from "https://deno.land/std/fmt/colors.ts";
 * console.log(bgBlue(red(bold("Hello world!"))));
 * ```
 *
 * This module supports `NO_COLOR` environmental variable disabling any coloring
 * if `NO_COLOR` is set.
 *
 * This module is browser compatible. */
System.register("https://deno.land/std@0.57.0/fmt/colors", [], function (exports_1, context_1) {
    "use strict";
    var noColor, enabled, ANSI_PATTERN;
    var __moduleName = context_1 && context_1.id;
    function setColorEnabled(value) {
        if (noColor) {
            return;
        }
        enabled = value;
    }
    exports_1("setColorEnabled", setColorEnabled);
    function getColorEnabled() {
        return enabled;
    }
    exports_1("getColorEnabled", getColorEnabled);
    function code(open, close) {
        return {
            open: `\x1b[${open.join(";")}m`,
            close: `\x1b[${close}m`,
            regexp: new RegExp(`\\x1b\\[${close}m`, "g"),
        };
    }
    function run(str, code) {
        return enabled
            ? `${code.open}${str.replace(code.regexp, code.open)}${code.close}`
            : str;
    }
    function reset(str) {
        return run(str, code([0], 0));
    }
    exports_1("reset", reset);
    function bold(str) {
        return run(str, code([1], 22));
    }
    exports_1("bold", bold);
    function dim(str) {
        return run(str, code([2], 22));
    }
    exports_1("dim", dim);
    function italic(str) {
        return run(str, code([3], 23));
    }
    exports_1("italic", italic);
    function underline(str) {
        return run(str, code([4], 24));
    }
    exports_1("underline", underline);
    function inverse(str) {
        return run(str, code([7], 27));
    }
    exports_1("inverse", inverse);
    function hidden(str) {
        return run(str, code([8], 28));
    }
    exports_1("hidden", hidden);
    function strikethrough(str) {
        return run(str, code([9], 29));
    }
    exports_1("strikethrough", strikethrough);
    function black(str) {
        return run(str, code([30], 39));
    }
    exports_1("black", black);
    function red(str) {
        return run(str, code([31], 39));
    }
    exports_1("red", red);
    function green(str) {
        return run(str, code([32], 39));
    }
    exports_1("green", green);
    function yellow(str) {
        return run(str, code([33], 39));
    }
    exports_1("yellow", yellow);
    function blue(str) {
        return run(str, code([34], 39));
    }
    exports_1("blue", blue);
    function magenta(str) {
        return run(str, code([35], 39));
    }
    exports_1("magenta", magenta);
    function cyan(str) {
        return run(str, code([36], 39));
    }
    exports_1("cyan", cyan);
    function white(str) {
        return run(str, code([37], 39));
    }
    exports_1("white", white);
    function gray(str) {
        return run(str, code([90], 39));
    }
    exports_1("gray", gray);
    function bgBlack(str) {
        return run(str, code([40], 49));
    }
    exports_1("bgBlack", bgBlack);
    function bgRed(str) {
        return run(str, code([41], 49));
    }
    exports_1("bgRed", bgRed);
    function bgGreen(str) {
        return run(str, code([42], 49));
    }
    exports_1("bgGreen", bgGreen);
    function bgYellow(str) {
        return run(str, code([43], 49));
    }
    exports_1("bgYellow", bgYellow);
    function bgBlue(str) {
        return run(str, code([44], 49));
    }
    exports_1("bgBlue", bgBlue);
    function bgMagenta(str) {
        return run(str, code([45], 49));
    }
    exports_1("bgMagenta", bgMagenta);
    function bgCyan(str) {
        return run(str, code([46], 49));
    }
    exports_1("bgCyan", bgCyan);
    function bgWhite(str) {
        return run(str, code([47], 49));
    }
    exports_1("bgWhite", bgWhite);
    /* Special Color Sequences */
    function clampAndTruncate(n, max = 255, min = 0) {
        return Math.trunc(Math.max(Math.min(n, max), min));
    }
    /** Set text color using paletted 8bit colors.
     * https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit */
    function rgb8(str, color) {
        return run(str, code([38, 5, clampAndTruncate(color)], 39));
    }
    exports_1("rgb8", rgb8);
    /** Set background color using paletted 8bit colors.
     * https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit */
    function bgRgb8(str, color) {
        return run(str, code([48, 5, clampAndTruncate(color)], 49));
    }
    exports_1("bgRgb8", bgRgb8);
    /** Set text color using 24bit rgb.
     * `color` can be a number in range `0x000000` to `0xffffff` or
     * an `Rgb`.
     *
     * To produce the color magenta:
     *
     *      rgba24("foo", 0xff00ff);
     *      rgba24("foo", {r: 255, g: 0, b: 255});
     */
    function rgb24(str, color) {
        if (typeof color === "number") {
            return run(str, code([38, 2, (color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff], 39));
        }
        return run(str, code([
            38,
            2,
            clampAndTruncate(color.r),
            clampAndTruncate(color.g),
            clampAndTruncate(color.b),
        ], 39));
    }
    exports_1("rgb24", rgb24);
    /** Set background color using 24bit rgb.
     * `color` can be a number in range `0x000000` to `0xffffff` or
     * an `Rgb`.
     *
     * To produce the color magenta:
     *
     *      bgRgba24("foo", 0xff00ff);
     *      bgRgba24("foo", {r: 255, g: 0, b: 255});
     */
    function bgRgb24(str, color) {
        if (typeof color === "number") {
            return run(str, code([48, 2, (color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff], 49));
        }
        return run(str, code([
            48,
            2,
            clampAndTruncate(color.r),
            clampAndTruncate(color.g),
            clampAndTruncate(color.b),
        ], 49));
    }
    exports_1("bgRgb24", bgRgb24);
    function stripColor(string) {
        return string.replace(ANSI_PATTERN, "");
    }
    exports_1("stripColor", stripColor);
    return {
        setters: [],
        execute: function () {
            noColor = globalThis.Deno?.noColor ?? true;
            enabled = !noColor;
            // https://github.com/chalk/ansi-regex/blob/2b56fb0c7a07108e5b54241e8faec160d393aedb/index.js
            ANSI_PATTERN = new RegExp([
                "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
                "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
            ].join("|"), "g");
        }
    };
});
// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/** This module is browser compatible. */
System.register("https://deno.land/std@0.57.0/testing/diff", [], function (exports_2, context_2) {
    "use strict";
    var DiffType, REMOVED, COMMON, ADDED;
    var __moduleName = context_2 && context_2.id;
    function createCommon(A, B, reverse) {
        const common = [];
        if (A.length === 0 || B.length === 0)
            return [];
        for (let i = 0; i < Math.min(A.length, B.length); i += 1) {
            if (A[reverse ? A.length - i - 1 : i] === B[reverse ? B.length - i - 1 : i]) {
                common.push(A[reverse ? A.length - i - 1 : i]);
            }
            else {
                return common;
            }
        }
        return common;
    }
    function diff(A, B) {
        const prefixCommon = createCommon(A, B);
        const suffixCommon = createCommon(A.slice(prefixCommon.length), B.slice(prefixCommon.length), true).reverse();
        A = suffixCommon.length
            ? A.slice(prefixCommon.length, -suffixCommon.length)
            : A.slice(prefixCommon.length);
        B = suffixCommon.length
            ? B.slice(prefixCommon.length, -suffixCommon.length)
            : B.slice(prefixCommon.length);
        const swapped = B.length > A.length;
        [A, B] = swapped ? [B, A] : [A, B];
        const M = A.length;
        const N = B.length;
        if (!M && !N && !suffixCommon.length && !prefixCommon.length)
            return [];
        if (!N) {
            return [
                ...prefixCommon.map((c) => ({ type: DiffType.common, value: c })),
                ...A.map((a) => ({
                    type: swapped ? DiffType.added : DiffType.removed,
                    value: a,
                })),
                ...suffixCommon.map((c) => ({ type: DiffType.common, value: c })),
            ];
        }
        const offset = N;
        const delta = M - N;
        const size = M + N + 1;
        const fp = new Array(size).fill({ y: -1 });
        /**
         * INFO:
         * This buffer is used to save memory and improve performance.
         * The first half is used to save route and last half is used to save diff
         * type.
         * This is because, when I kept new uint8array area to save type,performance
         * worsened.
         */
        const routes = new Uint32Array((M * N + size + 1) * 2);
        const diffTypesPtrOffset = routes.length / 2;
        let ptr = 0;
        let p = -1;
        function backTrace(A, B, current, swapped) {
            const M = A.length;
            const N = B.length;
            const result = [];
            let a = M - 1;
            let b = N - 1;
            let j = routes[current.id];
            let type = routes[current.id + diffTypesPtrOffset];
            while (true) {
                if (!j && !type)
                    break;
                const prev = j;
                if (type === REMOVED) {
                    result.unshift({
                        type: swapped ? DiffType.removed : DiffType.added,
                        value: B[b],
                    });
                    b -= 1;
                }
                else if (type === ADDED) {
                    result.unshift({
                        type: swapped ? DiffType.added : DiffType.removed,
                        value: A[a],
                    });
                    a -= 1;
                }
                else {
                    result.unshift({ type: DiffType.common, value: A[a] });
                    a -= 1;
                    b -= 1;
                }
                j = routes[prev];
                type = routes[prev + diffTypesPtrOffset];
            }
            return result;
        }
        function createFP(slide, down, k, M) {
            if (slide && slide.y === -1 && down && down.y === -1) {
                return { y: 0, id: 0 };
            }
            if ((down && down.y === -1) ||
                k === M ||
                (slide && slide.y) > (down && down.y) + 1) {
                const prev = slide.id;
                ptr++;
                routes[ptr] = prev;
                routes[ptr + diffTypesPtrOffset] = ADDED;
                return { y: slide.y, id: ptr };
            }
            else {
                const prev = down.id;
                ptr++;
                routes[ptr] = prev;
                routes[ptr + diffTypesPtrOffset] = REMOVED;
                return { y: down.y + 1, id: ptr };
            }
        }
        function snake(k, slide, down, _offset, A, B) {
            const M = A.length;
            const N = B.length;
            if (k < -N || M < k)
                return { y: -1, id: -1 };
            const fp = createFP(slide, down, k, M);
            while (fp.y + k < M && fp.y < N && A[fp.y + k] === B[fp.y]) {
                const prev = fp.id;
                ptr++;
                fp.id = ptr;
                fp.y += 1;
                routes[ptr] = prev;
                routes[ptr + diffTypesPtrOffset] = COMMON;
            }
            return fp;
        }
        while (fp[delta + offset].y < N) {
            p = p + 1;
            for (let k = -p; k < delta; ++k) {
                fp[k + offset] = snake(k, fp[k - 1 + offset], fp[k + 1 + offset], offset, A, B);
            }
            for (let k = delta + p; k > delta; --k) {
                fp[k + offset] = snake(k, fp[k - 1 + offset], fp[k + 1 + offset], offset, A, B);
            }
            fp[delta + offset] = snake(delta, fp[delta - 1 + offset], fp[delta + 1 + offset], offset, A, B);
        }
        return [
            ...prefixCommon.map((c) => ({ type: DiffType.common, value: c })),
            ...backTrace(A, B, fp[delta + offset], swapped),
            ...suffixCommon.map((c) => ({ type: DiffType.common, value: c })),
        ];
    }
    exports_2("default", diff);
    return {
        setters: [],
        execute: function () {
            (function (DiffType) {
                DiffType["removed"] = "removed";
                DiffType["common"] = "common";
                DiffType["added"] = "added";
            })(DiffType || (DiffType = {}));
            exports_2("DiffType", DiffType);
            REMOVED = 1;
            COMMON = 2;
            ADDED = 3;
        }
    };
});
// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/** This module is browser compatible. Do not rely on good formatting of values
 * for AssertionError messages in browsers. */
System.register("https://deno.land/std@0.57.0/testing/asserts", ["https://deno.land/std@0.57.0/fmt/colors", "https://deno.land/std@0.57.0/testing/diff"], function (exports_3, context_3) {
    "use strict";
    var colors_ts_1, diff_ts_1, CAN_NOT_DISPLAY, AssertionError;
    var __moduleName = context_3 && context_3.id;
    function format(v) {
        let string = globalThis.Deno ? Deno.inspect(v) : String(v);
        if (typeof v == "string") {
            string = `"${string.replace(/(?=["\\])/g, "\\")}"`;
        }
        return string;
    }
    function createColor(diffType) {
        switch (diffType) {
            case diff_ts_1.DiffType.added:
                return (s) => colors_ts_1.green(colors_ts_1.bold(s));
            case diff_ts_1.DiffType.removed:
                return (s) => colors_ts_1.red(colors_ts_1.bold(s));
            default:
                return colors_ts_1.white;
        }
    }
    function createSign(diffType) {
        switch (diffType) {
            case diff_ts_1.DiffType.added:
                return "+   ";
            case diff_ts_1.DiffType.removed:
                return "-   ";
            default:
                return "    ";
        }
    }
    function buildMessage(diffResult) {
        const messages = [];
        messages.push("");
        messages.push("");
        messages.push(`    ${colors_ts_1.gray(colors_ts_1.bold("[Diff]"))} ${colors_ts_1.red(colors_ts_1.bold("Actual"))} / ${colors_ts_1.green(colors_ts_1.bold("Expected"))}`);
        messages.push("");
        messages.push("");
        diffResult.forEach((result) => {
            const c = createColor(result.type);
            messages.push(c(`${createSign(result.type)}${result.value}`));
        });
        messages.push("");
        return messages;
    }
    function isKeyedCollection(x) {
        return [Symbol.iterator, "size"].every((k) => k in x);
    }
    function equal(c, d) {
        const seen = new Map();
        return (function compare(a, b) {
            // Have to render RegExp & Date for string comparison
            // unless it's mistreated as object
            if (a &&
                b &&
                ((a instanceof RegExp && b instanceof RegExp) ||
                    (a instanceof Date && b instanceof Date))) {
                return String(a) === String(b);
            }
            if (Object.is(a, b)) {
                return true;
            }
            if (a && typeof a === "object" && b && typeof b === "object") {
                if (seen.get(a) === b) {
                    return true;
                }
                if (Object.keys(a || {}).length !== Object.keys(b || {}).length) {
                    return false;
                }
                if (isKeyedCollection(a) && isKeyedCollection(b)) {
                    if (a.size !== b.size) {
                        return false;
                    }
                    let unmatchedEntries = a.size;
                    for (const [aKey, aValue] of a.entries()) {
                        for (const [bKey, bValue] of b.entries()) {
                            /* Given that Map keys can be references, we need
                             * to ensure that they are also deeply equal */
                            if ((aKey === aValue && bKey === bValue && compare(aKey, bKey)) ||
                                (compare(aKey, bKey) && compare(aValue, bValue))) {
                                unmatchedEntries--;
                            }
                        }
                    }
                    return unmatchedEntries === 0;
                }
                const merged = { ...a, ...b };
                for (const key in merged) {
                    if (!compare(a && a[key], b && b[key])) {
                        return false;
                    }
                }
                seen.set(a, b);
                return true;
            }
            return false;
        })(c, d);
    }
    exports_3("equal", equal);
    /** Make an assertion, if not `true`, then throw. */
    function assert(expr, msg = "") {
        if (!expr) {
            throw new AssertionError(msg);
        }
    }
    exports_3("assert", assert);
    /**
     * Make an assertion that `actual` and `expected` are equal, deeply. If not
     * deeply equal, then throw.
     */
    function assertEquals(actual, expected, msg) {
        if (equal(actual, expected)) {
            return;
        }
        let message = "";
        const actualString = format(actual);
        const expectedString = format(expected);
        try {
            const diffResult = diff_ts_1.default(actualString.split("\n"), expectedString.split("\n"));
            const diffMsg = buildMessage(diffResult).join("\n");
            message = `Values are not equal:\n${diffMsg}`;
        }
        catch (e) {
            message = `\n${colors_ts_1.red(CAN_NOT_DISPLAY)} + \n\n`;
        }
        if (msg) {
            message = msg;
        }
        throw new AssertionError(message);
    }
    exports_3("assertEquals", assertEquals);
    /**
     * Make an assertion that `actual` and `expected` are not equal, deeply.
     * If not then throw.
     */
    function assertNotEquals(actual, expected, msg) {
        if (!equal(actual, expected)) {
            return;
        }
        let actualString;
        let expectedString;
        try {
            actualString = String(actual);
        }
        catch (e) {
            actualString = "[Cannot display]";
        }
        try {
            expectedString = String(expected);
        }
        catch (e) {
            expectedString = "[Cannot display]";
        }
        if (!msg) {
            msg = `actual: ${actualString} expected: ${expectedString}`;
        }
        throw new AssertionError(msg);
    }
    exports_3("assertNotEquals", assertNotEquals);
    /**
     * Make an assertion that `actual` and `expected` are strictly equal.  If
     * not then throw.
     */
    function assertStrictEquals(actual, expected, msg) {
        if (actual === expected) {
            return;
        }
        let message;
        if (msg) {
            message = msg;
        }
        else {
            const actualString = format(actual);
            const expectedString = format(expected);
            if (actualString === expectedString) {
                const withOffset = actualString
                    .split("\n")
                    .map((l) => `     ${l}`)
                    .join("\n");
                message = `Values have the same structure but are not reference-equal:\n\n${colors_ts_1.red(withOffset)}\n`;
            }
            else {
                try {
                    const diffResult = diff_ts_1.default(actualString.split("\n"), expectedString.split("\n"));
                    const diffMsg = buildMessage(diffResult).join("\n");
                    message = `Values are not strictly equal:\n${diffMsg}`;
                }
                catch (e) {
                    message = `\n${colors_ts_1.red(CAN_NOT_DISPLAY)} + \n\n`;
                }
            }
        }
        throw new AssertionError(message);
    }
    exports_3("assertStrictEquals", assertStrictEquals);
    /**
     * Make an assertion that actual contains expected. If not
     * then thrown.
     */
    function assertStringContains(actual, expected, msg) {
        if (!actual.includes(expected)) {
            if (!msg) {
                msg = `actual: "${actual}" expected to contain: "${expected}"`;
            }
            throw new AssertionError(msg);
        }
    }
    exports_3("assertStringContains", assertStringContains);
    /**
     * Make an assertion that `actual` contains the `expected` values
     * If not then thrown.
     */
    function assertArrayContains(actual, expected, msg) {
        const missing = [];
        for (let i = 0; i < expected.length; i++) {
            let found = false;
            for (let j = 0; j < actual.length; j++) {
                if (equal(expected[i], actual[j])) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                missing.push(expected[i]);
            }
        }
        if (missing.length === 0) {
            return;
        }
        if (!msg) {
            msg = `actual: "${format(actual)}" expected to contain: "${format(expected)}"\nmissing: ${format(missing)}`;
        }
        throw new AssertionError(msg);
    }
    exports_3("assertArrayContains", assertArrayContains);
    /**
     * Make an assertion that `actual` match RegExp `expected`. If not
     * then thrown
     */
    function assertMatch(actual, expected, msg) {
        if (!expected.test(actual)) {
            if (!msg) {
                msg = `actual: "${actual}" expected to match: "${expected}"`;
            }
            throw new AssertionError(msg);
        }
    }
    exports_3("assertMatch", assertMatch);
    /**
     * Forcefully throws a failed assertion
     */
    function fail(msg) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        assert(false, `Failed assertion${msg ? `: ${msg}` : "."}`);
    }
    exports_3("fail", fail);
    /** Executes a function, expecting it to throw.  If it does not, then it
     * throws.  An error class and a string that should be included in the
     * error message can also be asserted.
     */
    function assertThrows(fn, ErrorClass, msgIncludes = "", msg) {
        let doesThrow = false;
        let error = null;
        try {
            fn();
        }
        catch (e) {
            if (ErrorClass && !(Object.getPrototypeOf(e) === ErrorClass.prototype)) {
                msg = `Expected error to be instance of "${ErrorClass.name}", but was "${e.constructor.name}"${msg ? `: ${msg}` : "."}`;
                throw new AssertionError(msg);
            }
            if (msgIncludes &&
                !colors_ts_1.stripColor(e.message).includes(colors_ts_1.stripColor(msgIncludes))) {
                msg = `Expected error message to include "${msgIncludes}", but got "${e.message}"${msg ? `: ${msg}` : "."}`;
                throw new AssertionError(msg);
            }
            doesThrow = true;
            error = e;
        }
        if (!doesThrow) {
            msg = `Expected function to throw${msg ? `: ${msg}` : "."}`;
            throw new AssertionError(msg);
        }
        return error;
    }
    exports_3("assertThrows", assertThrows);
    async function assertThrowsAsync(fn, ErrorClass, msgIncludes = "", msg) {
        let doesThrow = false;
        let error = null;
        try {
            await fn();
        }
        catch (e) {
            if (ErrorClass && !(Object.getPrototypeOf(e) === ErrorClass.prototype)) {
                msg = `Expected error to be instance of "${ErrorClass.name}", but got "${e.name}"${msg ? `: ${msg}` : "."}`;
                throw new AssertionError(msg);
            }
            if (msgIncludes &&
                !colors_ts_1.stripColor(e.message).includes(colors_ts_1.stripColor(msgIncludes))) {
                msg = `Expected error message to include "${msgIncludes}", but got "${e.message}"${msg ? `: ${msg}` : "."}`;
                throw new AssertionError(msg);
            }
            doesThrow = true;
            error = e;
        }
        if (!doesThrow) {
            msg = `Expected function to throw${msg ? `: ${msg}` : "."}`;
            throw new AssertionError(msg);
        }
        return error;
    }
    exports_3("assertThrowsAsync", assertThrowsAsync);
    /** Use this to stub out methods that will throw when invoked. */
    function unimplemented(msg) {
        throw new AssertionError(msg || "unimplemented");
    }
    exports_3("unimplemented", unimplemented);
    /** Use this to assert unreachable code. */
    function unreachable() {
        throw new AssertionError("unreachable");
    }
    exports_3("unreachable", unreachable);
    return {
        setters: [
            function (colors_ts_1_1) {
                colors_ts_1 = colors_ts_1_1;
            },
            function (diff_ts_1_1) {
                diff_ts_1 = diff_ts_1_1;
            }
        ],
        execute: function () {
            CAN_NOT_DISPLAY = "[Cannot display]";
            AssertionError = class AssertionError extends Error {
                constructor(message) {
                    super(message);
                    this.name = "AssertionError";
                }
            };
            exports_3("AssertionError", AssertionError);
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/lib/asserts", ["https://deno.land/std@0.57.0/testing/asserts"], function (exports_4, context_4) {
    "use strict";
    var test;
    var __moduleName = context_4 && context_4.id;
    var exportedNames_1 = {
        "test": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_4(exports);
    }
    return {
        setters: [
            function (asserts_ts_1_1) {
                exportStar_1(asserts_ts_1_1);
            }
        ],
        execute: function () {
            exports_4("test", test = globalThis?.Deno?.test ? globalThis.Deno.test : (name, implementation) => {
                try {
                    implementation();
                    console.log(`test ${name} ... ${"ok"}`);
                }
                catch (err) {
                    console.error(`test ${name} ... ${"failure"}`);
                    console.error(err);
                }
            });
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/lib/colors", ["https://deno.land/std@0.57.0/fmt/colors"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_5(exports);
    }
    return {
        setters: [
            function (colors_ts_2_1) {
                exportStar_2(colors_ts_2_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/sign/sign-function", ["file:///home/matt/@mwm/functional/lib/sign/source/functions"], function (exports_6, context_6) {
    "use strict";
    var functions_ts_1, getName, signFunction;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (functions_ts_1_1) {
                functions_ts_1 = functions_ts_1_1;
            }
        ],
        execute: function () {
            exports_6("getName", getName = (s) => s.split(/(\:\:)|\=|\∷/)[0].trim());
            /**
             * ```
             * signFunction :: ((…a => b), options) => (…a => b)
             * options      :: { signature: s, [k]: a}
             * ```
             * -----------------------------------------------------------------------------
             * Adds a non-enumerable __signature__ property to the function, __target__,
             * plus any additional properties given in __props__.
             *
             * **Warning**:
             * _sign_ must modify __target__ in-place because of possible `this` context
             * issues. If you don't want to modify the original function, _bind_ the
             * context first, using `f.bind(thisContext)` or the `clone` function. For
             * example:
             *
             * ```
             * const g = clone(f, context)
             * signFunction('boundF', g)
             * ```
             *
             * Will create a copy, `g`, of the function, `f`, preserving the enumerable
             * properties and methods of `f`, and then _sign_ that can modify that copy
             * instead of the original function.
             */
            exports_6("signFunction", signFunction = (target, { name, ...options }) => {
                const fixName = (name) => (options) => {
                    options.name = name || getName(options.signature);
                    return options;
                };
                const toDescriptors = (entries) => {
                    const mapper = ([k, v]) => ({
                        [k]: { value: v, enumerable: false },
                    });
                    return entries.map(mapper);
                };
                const joinDescriptors = (ds) => {
                    return ds.reduce((ds, d) => Object.assign(ds, d), {});
                };
                const defineProperties = (target) => (descriptorMap) => Object.defineProperties(target, descriptorMap);
                return functions_ts_1.pipe(fixName(name))
                    .next(Object.entries)
                    .next(toDescriptors)
                    .next(joinDescriptors)
                    .next(defineProperties(target))
                    .call(options);
            });
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/sign/pretty-print", [], function (exports_7, context_7) {
    "use strict";
    var signatures;
    var __moduleName = context_7 && context_7.id;
    /**
     * ```
     * prettyPrint :: s => s
     * ```
     * -----------------------------------------------------------------------------
     *
     * Takes a __signature__ _string_ and returns a normalized version of it.
     *
     */
    function prettyPrint(signature) {
        const [name, type = ""] = signature
            .trim()
            .replace(/ \s+/gi, " ")
            .replace(/\.\.\./gi, "...")
            .replace(/\*/gi, "⋇")
            .split(/\s*::\s*/);
        return [
            name === "" ? "ʎ" : name.replace(/[-=]>/gi, "->"),
            "::",
            type.replace(/[-=]>/gi, "=>"),
        ]
            .join(" ")
            .trim();
    }
    exports_7("prettyPrint", prettyPrint);
    return {
        setters: [],
        execute: function () {
            signatures = ["prettyPrint :: s => s"];
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/sign/make-signature", ["file:///home/matt/@mwm/functional/lib/sign/source/sign/pretty-print", "file:///home/matt/@mwm/functional/lib/sign/source/functions"], function (exports_8, context_8) {
    "use strict";
    var pretty_print_ts_1, functions_ts_2, hasSignature, hasArity, isSignature, stringToEntry, mapToEntry, entryToSignature, prettyPrintEntry, makeSignature, normalize;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (pretty_print_ts_1_1) {
                pretty_print_ts_1 = pretty_print_ts_1_1;
            },
            function (functions_ts_2_1) {
                functions_ts_2 = functions_ts_2_1;
            }
        ],
        execute: function () {
            hasSignature = functions_ts_2.own("signature");
            hasArity = functions_ts_2.own("arity");
            isSignature = (o) => hasSignature(o) && hasArity(o);
            stringToEntry = (s) => [s, 1];
            mapToEntry = (o) => Object.entries(o)[0];
            entryToSignature = ([k, v]) => ({
                signature: k,
                arity: v,
            });
            prettyPrintEntry = ([k, v]) => [
                pretty_print_ts_1.prettyPrint(k),
                v,
            ];
            makeSignature = functions_ts_2.pipe(functions_ts_2.ifElse(functions_ts_2.isString, stringToEntry, mapToEntry))
                .next(prettyPrintEntry)
                .next(entryToSignature);
            /**
             * ```
             * makeSignature :: ...[s] | ...[{s:n}] => [{s,n}]
             * ```
             * -----------------------------------------------------------------------------
             *
             * Creates an array of `{ signature, arity }` objects from one or more
             * __signature__ strings, or one or more `{ signature: arity }` objects.
             */
            normalize = functions_ts_2.map(functions_ts_2.ifElse(isSignature, (v) => v, makeSignature));
            exports_8("makeSignature", normalize);
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/sign/sign", ["file:///home/matt/@mwm/functional/lib/sign/source/sign/sign-function", "file:///home/matt/@mwm/functional/lib/sign/source/sign/make-signature"], function (exports_9, context_9) {
    "use strict";
    var sign_function_ts_1, make_signature_ts_1, signatures, split, apply;
    var __moduleName = context_9 && context_9.id;
    /**
     * ```
     * sign        :: (signatures, curried) => partial
     * signatures  :: [s¹,   s²,   ...,   sⁿ]
     * signature   :: s | {s:n}
     * curried     ::  a¹ => a² => ... => aⁿ  => b
     * partial     :: (a¹,   a²,   ...,   aⁿ) => b
     * ```
     * -----------------------------------------------------------------------------
     *
     * Takes an array of _n_ __signatures__, a __curried__  function that accepts
     * _n_ arguments, and returns a signed __partial__ function. This new function
     * can receive any number of arguments per application. Once it has received at
     * least _n_ arguments, it will produce the same value that _curried_ would,
     * given those same arguments.
     *
     * If a _curried_ function includes any __variadic__ applications, these
     * applications will be greedy. In other words, if multiple arguments can be
     * applied to a  variadic production, they will be applied. This means that
     * when a variadic application appears in the middle of a series, you will need
     * to do at least two partial applications to resolve the function.
     *
     * For example, given `pipe :: (...fs) => a => b`, the two productions below
     * are not equivalent:
     *
     * ```
     * pipe(f, g, h)(a) == b
     * pipe(f, g, h, a) != b
     * ```
     *
     * The first production will produce the value `b` as expected. The second
     * production, however, will treat the value `a` as a function, and produce a
     * partially applied function of the form `a => b`.
     *
     */
    function sign(signatures, target) {
        const normalized = make_signature_ts_1.makeSignature(signatures);
        return apply({ signatures: normalized, current: target });
    }
    exports_9("sign", sign);
    return {
        setters: [
            function (sign_function_ts_1_1) {
                sign_function_ts_1 = sign_function_ts_1_1;
            },
            function (make_signature_ts_1_1) {
                make_signature_ts_1 = make_signature_ts_1_1;
            }
        ],
        execute: function () {
            // deno-fmt-ignore
            signatures = [
                ["sign :: ([s¹, s², sⁿ], (a¹ => a² => ...aⁿ => b)) =>  (a¹, a², ...aⁿ) => b", 2],
                ["sign ::                                              (a¹, a², ...aⁿ) => b", Infinity],
            ];
            split = (n, as) => [as.slice(0, n), as.slice(n)];
            apply = ({ signatures, current, arguments: applied = [], ...rest }) => {
                const [{ arity, signature }, ...remaining] = signatures;
                const unsigned = remaining.length === 0
                    ? current.bind(rest.this)
                    : (...args) => {
                        const [first, after] = split(arity, args);
                        const next = current(...first);
                        const options = {
                            ...rest,
                            signatures: remaining,
                            current: next,
                            arity,
                            length: signatures.length,
                            arguments: [...applied, ...first],
                        };
                        return args.length > arity ? apply(options)(...after) : apply(options);
                    };
                return sign_function_ts_1.signFunction(unsigned, {
                    ...rest,
                    signature: signature,
                    arity,
                    length: signatures.length,
                    arguments: applied,
                });
            };
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/sign", ["file:///home/matt/@mwm/functional/lib/sign/source/sign/sign", "file:///home/matt/@mwm/functional/lib/sign/source/sign/make-signature"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (sign_ts_1_1) {
                exports_10({
                    "sign": sign_ts_1_1["sign"]
                });
            },
            function (make_signature_ts_2_1) {
                exports_10({
                    "makeSignature": make_signature_ts_2_1["makeSignature"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/always", [], function (exports_11, context_11) {
    "use strict";
    var signatures, always;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
            signatures = [
                { "always :: a => * => a": 1 },
                { "always ::      * => a": 0 },
            ];
            /**
             * ```
             * always :: a => * => a
             * ```
             * -----------------------------------------------------------------------------
             *
             * Creates a function that always returns _value_, ignoring any arguments.
             */
            exports_11("always", always = (a) => (...bs) => a);
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/arity", [], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    function toVariadic(u) {
        return (...as) => u(as);
    }
    exports_12("toVariadic", toVariadic);
    function toUnary(v) {
        return (as) => v(...as);
    }
    exports_12("toUnary", toUnary);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/if-else", [], function (exports_13, context_13) {
    "use strict";
    var ifElse;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
            exports_13("ifElse", ifElse = (predicate, whenTrue, whenFalse) => (x) => (predicate(x) ? whenTrue(x) : whenFalse(x)));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/identity", [], function (exports_14, context_14) {
    "use strict";
    var identity;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [],
        execute: function () {
            /**
             * ```
             * identity :: a => a
             * ```
             * -----------------------------------------------------------------------------
             *
             * Returns it's argument, unmodified.
             *
             */
            exports_14("identity", identity = (a) => a);
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/is", [], function (exports_15, context_15) {
    "use strict";
    var isString, isNil, isObject;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
            exports_15("isString", isString = (v) => typeof v === "string");
            exports_15("isNil", isNil = (v) => v == undefined);
            exports_15("isObject", isObject = (v) => typeof v === "object");
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/clone", ["file:///home/matt/@mwm/functional/lib/sign/source/functions/is"], function (exports_16, context_16) {
    "use strict";
    var is_ts_1;
    var __moduleName = context_16 && context_16.id;
    function cloneObject(a, map = new WeakMap()) {
        if (map.has(a))
            return map.get(a);
        const c = Object.entries(a).reduce((clone, [key, value]) => {
            return Object.assign(clone, { [key]: cloneUnknown(value, map) });
        }, {});
        map.set(a, c);
        return c;
    }
    function cloneUnknown(a, map = new WeakMap()) {
        if (is_ts_1.isNil(a)) {
            return a;
        }
        if (a instanceof Date) {
            return new Date(a.valueOf());
        }
        if (Array.isArray(a)) {
            return a.map((v) => cloneUnknown(v, map));
        }
        if (typeof a === "object" || typeof a === "function") {
            return cloneObject(a, map);
        }
        return a;
    }
    function clone(a) {
        const map = new WeakMap();
        return cloneUnknown(a, map);
    }
    exports_16("clone", clone);
    return {
        setters: [
            function (is_ts_1_1) {
                is_ts_1 = is_ts_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/assoc", ["file:///home/matt/@mwm/functional/lib/sign/source/functions/clone"], function (exports_17, context_17) {
    "use strict";
    var clone_ts_1, assoc;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (clone_ts_1_1) {
                clone_ts_1 = clone_ts_1_1;
            }
        ],
        execute: function () {
            /**
             * ```
             * assoc = (k, i?) => a => b => {...b, [k]:a}
             * ```
             * -----------------------------------------------------------------------------
             *
             * Clones the object __b__, associating the key, __k__, with value, __b__.
             * Accepts an optional type-instance example, __i__, which is used to infer
             * typings for the final object.
             *
             * For example:
             *
             * ```
             * b[k] = a <=> assoc(k, a, b).
             * ```
             *
             */
            exports_17("assoc", assoc = (key, i) => (b) => (a) => Object.assign(clone_ts_1.clone(a), { [key]: b }));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/bind", [], function (exports_18, context_18) {
    "use strict";
    var signatures, bind;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [],
        execute: function () {
            signatures = [
                { "bind->method :: (...as #> b) => o => ...as => b": 1 },
                { "bind->this   ::                 o => ...as => b": 1 },
                { "bound        ::                      ...as => b": Infinity },
            ];
            /**
             * ```
             * bind :: (...as => b) => o => ...as => b
             * ```
             * -----------------------------------------------------------------------------
             * Creates a new _Function_ that binds a __method__ to a __context__.
             *
             * @param method a function that depends on a dynamic `this` context
             * @param object the method's context
             */
            exports_18("bind", bind = (m) => (b) => m.bind(b));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/cap", [], function (exports_19, context_19) {
    "use strict";
    var signatures;
    var __moduleName = context_19 && context_19.id;
    function cap(word) {
        return typeof word === "string" && word.length > 0
            ? word[0].toLocaleUpperCase() + word.substr(1)
            : "";
    }
    exports_19("cap", cap);
    return {
        setters: [],
        execute: function () {
            signatures = ["cap :: s => s"];
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/compose", [], function (exports_20, context_20) {
    "use strict";
    var last, after;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [],
        execute: function () {
            last = (f) => {
                function call(b) {
                    return f(b);
                }
                const p = Object.assign(call.bind(null), {
                    after: (f) => {
                        return after(p, f);
                    },
                    call,
                });
                return p;
            };
            exports_20("compose", last);
            after = (next, f) => {
                function call(c) {
                    return next(f(c));
                }
                const p = Object.assign(call.bind(null), {
                    after: (f) => {
                        return after(p, f);
                    },
                    call,
                });
                return p;
            };
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/reduce", [], function (exports_21, context_21) {
    "use strict";
    var reduce, reduceV;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [],
        execute: function () {
            exports_21("reduce", reduce = (r) => (b) => (as) => as.reduce(r, b));
            exports_21("reduceV", reduceV = (r) => (b) => (...as) => as.reduce(r, b));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/get", [], function (exports_22, context_22) {
    "use strict";
    var get;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [],
        execute: function () {
            exports_22("get", get = (k) => (a) => Reflect.get(a, k));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/map", [], function (exports_23, context_23) {
    "use strict";
    var map, mapV;
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [],
        execute: function () {
            exports_23("map", map = (ab) => (as) => as.map(ab));
            exports_23("mapV", mapV = (ab) => (...as) => as.map(ab));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/own", [], function (exports_24, context_24) {
    "use strict";
    var own;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [],
        execute: function () {
            exports_24("own", own = (k) => (a) => {
                return Object.prototype.hasOwnProperty.call(a, k);
            });
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/pipe", [], function (exports_25, context_25) {
    "use strict";
    var first, next;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [],
        execute: function () {
            first = (f) => {
                function call(a) {
                    return f(a);
                }
                const p = Object.assign(call.bind(null), {
                    next: (f) => {
                        return next(p, f);
                    },
                    call,
                });
                return p;
            };
            exports_25("pipe", first);
            next = (prev, f) => {
                function call(a) {
                    return f(prev(a));
                }
                const p = Object.assign(call.bind(null), {
                    next: (f) => {
                        return next(p, f);
                    },
                    call,
                });
                return p;
            };
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions/reverse", [], function (exports_26, context_26) {
    "use strict";
    var reverse;
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [],
        execute: function () {
            exports_26("reverse", reverse = (as) => [...as].reverse());
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/functions", ["file:///home/matt/@mwm/functional/lib/sign/source/functions/always", "file:///home/matt/@mwm/functional/lib/sign/source/functions/arity", "file:///home/matt/@mwm/functional/lib/sign/source/functions/assoc", "file:///home/matt/@mwm/functional/lib/sign/source/functions/bind", "file:///home/matt/@mwm/functional/lib/sign/source/functions/cap", "file:///home/matt/@mwm/functional/lib/sign/source/functions/clone", "file:///home/matt/@mwm/functional/lib/sign/source/functions/compose", "file:///home/matt/@mwm/functional/lib/sign/source/functions/reduce", "file:///home/matt/@mwm/functional/lib/sign/source/functions/get", "file:///home/matt/@mwm/functional/lib/sign/source/functions/identity", "file:///home/matt/@mwm/functional/lib/sign/source/functions/if-else", "file:///home/matt/@mwm/functional/lib/sign/source/functions/is", "file:///home/matt/@mwm/functional/lib/sign/source/functions/map", "file:///home/matt/@mwm/functional/lib/sign/source/functions/own", "file:///home/matt/@mwm/functional/lib/sign/source/functions/pipe", "file:///home/matt/@mwm/functional/lib/sign/source/functions/reverse"], function (exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    function exportStar_3(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_27(exports);
    }
    return {
        setters: [
            function (always_ts_1_1) {
                exportStar_3(always_ts_1_1);
            },
            function (arity_ts_1_1) {
                exportStar_3(arity_ts_1_1);
            },
            function (assoc_ts_1_1) {
                exportStar_3(assoc_ts_1_1);
            },
            function (bind_ts_1_1) {
                exportStar_3(bind_ts_1_1);
            },
            function (cap_ts_1_1) {
                exportStar_3(cap_ts_1_1);
            },
            function (clone_ts_2_1) {
                exportStar_3(clone_ts_2_1);
            },
            function (compose_ts_1_1) {
                exportStar_3(compose_ts_1_1);
            },
            function (reduce_ts_1_1) {
                exportStar_3(reduce_ts_1_1);
                exportStar_3(reduce_ts_1_1);
            },
            function (get_ts_1_1) {
                exportStar_3(get_ts_1_1);
            },
            function (identity_ts_1_1) {
                exportStar_3(identity_ts_1_1);
            },
            function (if_else_ts_1_1) {
                exportStar_3(if_else_ts_1_1);
            },
            function (is_ts_2_1) {
                exportStar_3(is_ts_2_1);
            },
            function (map_ts_1_1) {
                exportStar_3(map_ts_1_1);
            },
            function (own_ts_1_1) {
                exportStar_3(own_ts_1_1);
            },
            function (pipe_ts_1_1) {
                exportStar_3(pipe_ts_1_1);
            },
            function (reverse_ts_1_1) {
                exportStar_3(reverse_ts_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/testing/inspect", ["file:///home/matt/@mwm/functional/lib/sign/source/functions"], function (exports_28, context_28) {
    "use strict";
    var functions_ts_3, inspect, toString;
    var __moduleName = context_28 && context_28.id;
    return {
        setters: [
            function (functions_ts_3_1) {
                functions_ts_3 = functions_ts_3_1;
            }
        ],
        execute: function () {
            /**
             * ```
             * configure :: o => TemplateTag
             * ```
             * -----------------------------------------------------------------------------
             *
             * Configures an instance of inspect with any options of the options allowed by
             * [Node's util/inspect module](https://nodejs.org/dist/latest-v12.x/docs/api/util.html#util_util_inspect_object_options).
             *
             * This module's `inspect` uses these default options:
             * ```javascript
             * {
             *   depth: Infinity,
             *   colors: true,
             *   breakLength: Infinity,
             * }
             * ```
             */
            exports_28("inspect", inspect = (literals, ...values) => {
                const inspectedValues = values.map(toString);
                const full = [];
                for (let i = 0; i < literals.length; i++) {
                    if (literals[i]) {
                        full.push(literals[i]);
                    }
                    if (inspectedValues[i]) {
                        full.push(inspectedValues[i]);
                    }
                }
                return full.join("");
            });
            toString = (o) => {
                if (o === true) {
                    return "true";
                }
                if (o === false) {
                    return "false";
                }
                if (o === undefined) {
                    return "undefined";
                }
                if (o === null) {
                    return "null";
                }
                if (typeof o === "string") {
                    return `"${o}"`;
                }
                if (typeof o === "object") {
                    return JSON.stringify(o);
                }
                if (typeof o === "function") {
                    const f = functions_ts_3.own("signature");
                    const g = functions_ts_3.get("signature");
                    return f(o) ? g(o) : `${o.name || "ʎ"} :: ${o}`;
                }
                return `${o}`;
            };
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/testing/constrain-width-to", ["file:///home/matt/@mwm/functional/lib/sign/source/lib/colors"], function (exports_29, context_29) {
    "use strict";
    var colors_ts_3, constrainWidthTo;
    var __moduleName = context_29 && context_29.id;
    return {
        setters: [
            function (colors_ts_3_1) {
                colors_ts_3 = colors_ts_3_1;
            }
        ],
        execute: function () {
            exports_29("constrainWidthTo", constrainWidthTo = (length, s) => {
                const stripped = colors_ts_3.stripColor(s);
                const strippedLength = stripped.length;
                const a = "";
                const c = "";
                const maxLengthB = -5 - a.length + length - c.length - 20;
                const strip = strippedLength < maxLengthB ? 0 : strippedLength - maxLengthB;
                const b = strip > 0
                    ? colors_ts_3.reset(s.substring(0, s.length - strip))
                    : s + " ".repeat(maxLengthB - strippedLength);
                return `${a}${b}${c}`;
            });
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/testing/describe", ["file:///home/matt/@mwm/functional/lib/sign/source/lib/asserts", "file:///home/matt/@mwm/functional/lib/sign/source/lib/colors", "file:///home/matt/@mwm/functional/lib/sign/source/testing/inspect", "file:///home/matt/@mwm/functional/lib/sign/source/testing/constrain-width-to"], function (exports_30, context_30) {
    "use strict";
    var asserts_ts_2, colors_ts_4, inspect_ts_1, constrain_width_to_ts_1, describe, makeAssert;
    var __moduleName = context_30 && context_30.id;
    return {
        setters: [
            function (asserts_ts_2_1) {
                asserts_ts_2 = asserts_ts_2_1;
            },
            function (colors_ts_4_1) {
                colors_ts_4 = colors_ts_4_1;
            },
            function (inspect_ts_1_1) {
                inspect_ts_1 = inspect_ts_1_1;
            },
            function (constrain_width_to_ts_1_1) {
                constrain_width_to_ts_1 = constrain_width_to_ts_1_1;
            }
        ],
        execute: function () {
            exports_30("describe", describe = (prefix, implementation) => {
                const pre = prefix ? `${colors_ts_4.cyan(prefix)}: ` : ``;
                const assert = Object.assign(makeAssert(pre, 120, asserts_ts_2.assertEquals), { not: makeAssert(pre, 120, asserts_ts_2.assertNotEquals) });
                return implementation({ assert, inspect: inspect_ts_1.inspect });
            });
            makeAssert = (prefix, width = 120, assert) => {
                return async ({ actual, expected, value, message, given = inspect_ts_1.inspect `${value ? value : actual}`, should = inspect_ts_1.inspect `be ${expected}`, }) => {
                    return asserts_ts_2.test(constrain_width_to_ts_1.constrainWidthTo(width, `${prefix}${message ? message : `given ${given}; should ${should}`}`), () => assert(actual, expected));
                };
            };
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign/source/testing", ["file:///home/matt/@mwm/functional/lib/sign/source/testing/describe", "file:///home/matt/@mwm/functional/lib/sign/source/testing/inspect"], function (exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    function exportStar_4(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_31(exports);
    }
    return {
        setters: [
            function (describe_ts_1_1) {
                exportStar_4(describe_ts_1_1);
            },
            function (inspect_ts_2_1) {
                exportStar_4(inspect_ts_2_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/describe", ["file:///home/matt/@mwm/functional/lib/sign/source/testing"], function (exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    function exportStar_5(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_32(exports);
    }
    return {
        setters: [
            function (testing_ts_1_1) {
                exportStar_5(testing_ts_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/lib/sign", ["file:///home/matt/@mwm/functional/lib/sign/source/sign"], function (exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    return {
        setters: [
            function (sign_ts_2_1) {
                exports_33({
                    "sign": sign_ts_2_1["sign"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/always/always", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_34, context_34) {
    "use strict";
    var sign_1, signatures, implementation, always;
    var __moduleName = context_34 && context_34.id;
    return {
        setters: [
            function (sign_1_1) {
                sign_1 = sign_1_1;
            }
        ],
        execute: function () {
            exports_34("signatures", signatures = [
                { "always :: a => * => a": 1 },
                { "always ::      * => a": 0 },
            ]);
            exports_34("implementation", implementation = (value) => () => value);
            exports_34("always", always = sign_1.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/always/index", ["file:///home/matt/@mwm/functional/source/always/always"], function (exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    return {
        setters: [
            function (always_js_1_1) {
                exports_35({
                    "always": always_js_1_1["always"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/clone/clone", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_36, context_36) {
    "use strict";
    var sign_2, signatures, implementation, clone, recursiveClone, cloneFunction, cloneArray, cloneDate, cloneObject;
    var __moduleName = context_36 && context_36.id;
    return {
        setters: [
            function (sign_2_1) {
                sign_2 = sign_2_1;
            }
        ],
        execute: function () {
            exports_36("signatures", signatures = [{ "clone :: (a, this?) => a": 2 }]);
            exports_36("implementation", implementation = (value, context) => recursiveClone(new WeakMap(), value, context));
            exports_36("clone", clone = sign_2.sign(signatures, implementation));
            recursiveClone = (map, value, context) => {
                const existingClone = map.get(value);
                if (existingClone)
                    return existingClone;
                if (typeof value === "function")
                    return cloneFunction(map, value, context);
                if (Array.isArray(value))
                    return cloneArray(map, value);
                if (value instanceof Date)
                    return cloneDate(value);
                if (value instanceof Object)
                    return cloneObject(map, value);
                return value;
            };
            cloneFunction = (map, fun, context) => cloneObject(map, fun, fun.bind(context));
            cloneArray = (map, arr) => {
                const copy = [];
                map.set(arr, copy);
                arr.reduce((copy, value) => {
                    copy.push(recursiveClone(map, value));
                    return copy;
                }, copy);
                return copy;
            };
            cloneDate = (date) => new Date(date.valueOf());
            cloneObject = (map, obj, copy = {}) => {
                map.set(obj, copy);
                const keys = Object.keys(obj);
                keys.reduce((copy, key) => {
                    copy[key] = recursiveClone(map, obj[key]);
                    return copy;
                }, copy);
                return copy;
            };
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/clone/index", ["file:///home/matt/@mwm/functional/source/clone/clone"], function (exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    return {
        setters: [
            function (clone_js_1_1) {
                exports_37({
                    "clone": clone_js_1_1["clone"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/assoc/assoc", ["file:///home/matt/@mwm/functional/lib/sign", "file:///home/matt/@mwm/functional/source/clone/index"], function (exports_38, context_38) {
    "use strict";
    var sign_3, index_js_1, signatures, implementation, assoc;
    var __moduleName = context_38 && context_38.id;
    return {
        setters: [
            function (sign_3_1) {
                sign_3 = sign_3_1;
            },
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            }
        ],
        execute: function () {
            exports_38("signatures", signatures = [
                { "assoc :: k => a => {k:*} => {k:a}": 1 },
                { "assoc ::      a => {k:*} => {k:a}": 1 },
                { "assoc ::           {k:*} => {k:a}": 1 },
            ]);
            exports_38("implementation", implementation = (key) => (value) => (object) => Object.assign(index_js_1.clone(object), { [key]: value }));
            exports_38("assoc", assoc = sign_3.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/assoc/index", ["file:///home/matt/@mwm/functional/source/assoc/assoc"], function (exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    return {
        setters: [
            function (assoc_js_1_1) {
                exports_39({
                    "assoc": assoc_js_1_1["assoc"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/bind/bind", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_40, context_40) {
    "use strict";
    var sign_4, signatures, implementation, bind;
    var __moduleName = context_40 && context_40.id;
    return {
        setters: [
            function (sign_4_1) {
                sign_4 = sign_4_1;
            }
        ],
        execute: function () {
            exports_40("signatures", signatures = [
                { "bind->method :: (...as #> b) => o => ...as => b": 1 },
                { "bind->this   ::                 o => ...as => b": 1 },
                { "bound        ::                      ...as => b": Infinity },
            ]);
            exports_40("implementation", implementation = (m) => (t) => (...as) => m.apply(t, as));
            exports_40("bind", bind = sign_4.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/bind/index", ["file:///home/matt/@mwm/functional/source/bind/bind"], function (exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    return {
        setters: [
            function (bind_js_1_1) {
                exports_41({
                    "bind": bind_js_1_1["bind"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/blackbird/blackbird", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_42, context_42) {
    "use strict";
    var sign_5, signatures, implementation, blackbird;
    var __moduleName = context_42 && context_42.id;
    return {
        setters: [
            function (sign_5_1) {
                sign_5 = sign_5_1;
            }
        ],
        execute: function () {
            exports_42("signatures", signatures = [
                {
                    "blackbird->converging :: ((b¹, b², ..., bⁿ) => c) => (a => b¹, a => b², ..., a => bⁿ) => a => c": 1,
                },
                {
                    "blackbird->parts      ::                             (a => b¹, a => b², ..., a => bⁿ) => a => c": Infinity,
                },
                {
                    "blackbird             ::                                                                 a => c": 1,
                },
            ]);
            exports_42("implementation", implementation = (converging) => (...parts) => (a) => {
                const bs = parts.map((part) => part(a));
                return converging(...bs);
            });
            exports_42("blackbird", blackbird = sign_5.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/blackbird/index", ["file:///home/matt/@mwm/functional/source/blackbird/blackbird"], function (exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
    return {
        setters: [
            function (blackbird_js_1_1) {
                exports_43({
                    "blackbird": blackbird_js_1_1["blackbird"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/both/both", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_44, context_44) {
    "use strict";
    var sign_6, signatures, implementation, both;
    var __moduleName = context_44 && context_44.id;
    return {
        setters: [
            function (sign_6_1) {
                sign_6 = sign_6_1;
            }
        ],
        execute: function () {
            exports_44("signatures", signatures = [
                "both->first  :: (a => b) => (a => c) => a => b|c",
                "both->second ::             (a => c) => a => b|c",
                "both         ::                         a => b|c",
            ]);
            exports_44("implementation", implementation = (first) => (second) => (value) => first(value) && second(value));
            exports_44("both", both = sign_6.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/both/index", ["file:///home/matt/@mwm/functional/source/both/both"], function (exports_45, context_45) {
    "use strict";
    var __moduleName = context_45 && context_45.id;
    return {
        setters: [
            function (both_js_1_1) {
                exports_45({
                    "both": both_js_1_1["both"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/complement/complement", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_46, context_46) {
    "use strict";
    var sign_7, signatures, implementation, complement;
    var __moduleName = context_46 && context_46.id;
    return {
        setters: [
            function (sign_7_1) {
                sign_7 = sign_7_1;
            }
        ],
        execute: function () {
            exports_46("signatures", signatures = [
                "complement->predicate :: (a => Boolean) => a => Boolean",
                "complement            ::                   a => Boolean",
            ]);
            exports_46("implementation", implementation = (predicate) => (value) => !predicate(value));
            exports_46("complement", complement = sign_7.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/complement/index", ["file:///home/matt/@mwm/functional/source/complement/complement"], function (exports_47, context_47) {
    "use strict";
    var __moduleName = context_47 && context_47.id;
    return {
        setters: [
            function (complement_js_1_1) {
                exports_47({
                    "complement": complement_js_1_1["complement"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/compose/compose", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_48, context_48) {
    "use strict";
    var sign_8, signatures, reducer, implementation, compose;
    var __moduleName = context_48 && context_48.id;
    return {
        setters: [
            function (sign_8_1) {
                sign_8 = sign_8_1;
            }
        ],
        execute: function () {
            // ⁿ²¹⁰
            exports_48("signatures", signatures = [
                { "compose :: (aⁿ => b, ..., a¹ => a², a => a¹) => a => b": Infinity },
                { "compose ::                                      a => b": Infinity },
            ]);
            reducer = (v, f) => f(v);
            exports_48("implementation", implementation = (...functions) => (...as) => {
                const [f, ...fs] = functions.reverse();
                return fs.reduce(reducer, f(...as));
            });
            exports_48("compose", compose = sign_8.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/compose/index", ["file:///home/matt/@mwm/functional/source/compose/compose"], function (exports_49, context_49) {
    "use strict";
    var __moduleName = context_49 && context_49.id;
    return {
        setters: [
            function (compose_js_1_1) {
                exports_49({
                    "compose": compose_js_1_1["compose"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/curryN/curryN", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_50, context_50) {
    "use strict";
    var sign_9, signatures, gatherN, genSigns, implementation, curryN;
    var __moduleName = context_50 && context_50.id;
    return {
        setters: [
            function (sign_9_1) {
                sign_9 = sign_9_1;
            }
        ],
        execute: function () {
            exports_50("signatures", signatures = [
                "curryN :: n => ((a¹, a², ..., aⁿ) => b) =>  a¹ => a²... => aⁿ => b",
                "curryN ::      ((a¹, a², ..., aⁿ) => b) =>  a¹ => a²... => aⁿ => b",
            ]);
            gatherN = (n, f) => function g(...as) {
                return as.length < n ? (a) => g(...as, a) : f(...as);
            };
            genSigns = (name, length) => {
                const signatures = [];
                for (let i = 0; i < length; i++) {
                    signatures.push({ [name + i]: 1 });
                }
                return signatures;
            };
            exports_50("implementation", implementation = (n) => (f) => {
                const s = genSigns(f.name, n);
                return sign_9.sign(s, gatherN(n, f));
            });
            exports_50("curryN", curryN = sign_9.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/curry/curry", ["file:///home/matt/@mwm/functional/lib/sign", "file:///home/matt/@mwm/functional/source/curryN/curryN"], function (exports_51, context_51) {
    "use strict";
    var sign_10, curryN_js_1, signatures, implementation, curry;
    var __moduleName = context_51 && context_51.id;
    return {
        setters: [
            function (sign_10_1) {
                sign_10 = sign_10_1;
            },
            function (curryN_js_1_1) {
                curryN_js_1 = curryN_js_1_1;
            }
        ],
        execute: function () {
            exports_51("signatures", signatures = [
                "curry :: ((a¹, a²..., aⁿ) => b) => a¹ => a²...=> aⁿ => b",
            ]);
            exports_51("implementation", implementation = (originalFunction) => curryN_js_1.curryN(originalFunction.length)(originalFunction));
            exports_51("curry", curry = sign_10.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/curry/index", ["file:///home/matt/@mwm/functional/source/curry/curry"], function (exports_52, context_52) {
    "use strict";
    var __moduleName = context_52 && context_52.id;
    return {
        setters: [
            function (curry_js_1_1) {
                exports_52({
                    "curry": curry_js_1_1["curry"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/curryN/index", ["file:///home/matt/@mwm/functional/source/curryN/curryN"], function (exports_53, context_53) {
    "use strict";
    var __moduleName = context_53 && context_53.id;
    return {
        setters: [
            function (curryN_js_2_1) {
                exports_53({
                    "curryN": curryN_js_2_1["curryN"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/isDefined/isDefined", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_54, context_54) {
    "use strict";
    var sign_11, signatures, implementation, isDefined;
    var __moduleName = context_54 && context_54.id;
    return {
        setters: [
            function (sign_11_1) {
                sign_11 = sign_11_1;
            }
        ],
        execute: function () {
            exports_54("signatures", signatures = ["isDefined :: a => boolean"]);
            exports_54("implementation", implementation = (a) => a === a && a !== undefined && a !== null);
            exports_54("isDefined", isDefined = sign_11.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/isDefined/index", ["file:///home/matt/@mwm/functional/source/isDefined/isDefined"], function (exports_55, context_55) {
    "use strict";
    var __moduleName = context_55 && context_55.id;
    return {
        setters: [
            function (isDefined_js_1_1) {
                exports_55({
                    "isDefined": isDefined_js_1_1["isDefined"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/defaultTo/defaultTo", ["file:///home/matt/@mwm/functional/lib/sign", "file:///home/matt/@mwm/functional/source/isDefined/index"], function (exports_56, context_56) {
    "use strict";
    var sign_12, index_js_2, signatures, implementation, defaultTo;
    var __moduleName = context_56 && context_56.id;
    return {
        setters: [
            function (sign_12_1) {
                sign_12 = sign_12_1;
            },
            function (index_js_2_1) {
                index_js_2 = index_js_2_1;
            }
        ],
        execute: function () {
            exports_56("signatures", signatures = [
                { "defaultTo :: a => b => a|b": 1 },
                { "defaultTo ::      b => a|b": 1 },
            ]);
            exports_56("implementation", implementation = (defaultValue) => (value) => index_js_2.isDefined(value) ? value : defaultValue);
            exports_56("defaultTo", defaultTo = sign_12.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/defaultTo/index", ["file:///home/matt/@mwm/functional/source/defaultTo/defaultTo"], function (exports_57, context_57) {
    "use strict";
    var __moduleName = context_57 && context_57.id;
    return {
        setters: [
            function (defaultTo_js_1_1) {
                exports_57({
                    "defaultTo": defaultTo_js_1_1["defaultTo"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/either/either", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_58, context_58) {
    "use strict";
    var sign_13, signatures, implementation, either;
    var __moduleName = context_58 && context_58.id;
    return {
        setters: [
            function (sign_13_1) {
                sign_13 = sign_13_1;
            }
        ],
        execute: function () {
            exports_58("signatures", signatures = [
                { "either :: (a => b) => (a => c) => a => b|c": 1 },
                { "either ::             (a => c) => a => b|c": 1 },
                { "either ::                         a => b|c": 1 },
            ]);
            exports_58("implementation", implementation = (mapAB) => (mapAC) => (a) => mapAB(a) || mapAC(a));
            exports_58("either", either = sign_13.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/either/index", ["file:///home/matt/@mwm/functional/source/either/either"], function (exports_59, context_59) {
    "use strict";
    var __moduleName = context_59 && context_59.id;
    return {
        setters: [
            function (either_js_1_1) {
                exports_59({
                    "either": either_js_1_1["either"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/equals/equals", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_60, context_60) {
    "use strict";
    var sign_14, signatures, implementation, equals;
    var __moduleName = context_60 && context_60.id;
    return {
        setters: [
            function (sign_14_1) {
                sign_14 = sign_14_1;
            }
        ],
        execute: function () {
            exports_60("signatures", signatures = [
                "equals :: a => b => Boolean",
                "equals ::      b => Boolean",
            ]);
            exports_60("implementation", implementation = (a) => (b) => a === b);
            exports_60("equals", equals = sign_14.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/equals/index", ["file:///home/matt/@mwm/functional/source/equals/equals"], function (exports_61, context_61) {
    "use strict";
    var __moduleName = context_61 && context_61.id;
    return {
        setters: [
            function (equals_js_1_1) {
                exports_61({
                    "equals": equals_js_1_1["equals"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/F/F", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_62, context_62) {
    "use strict";
    var sign_15, signatures, implementation, F;
    var __moduleName = context_62 && context_62.id;
    return {
        setters: [
            function (sign_15_1) {
                sign_15 = sign_15_1;
            }
        ],
        execute: function () {
            exports_62("signatures", signatures = [{ "F :: * => false": 1 }]);
            exports_62("implementation", implementation = () => false);
            exports_62("F", F = sign_15.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/F/index", ["file:///home/matt/@mwm/functional/source/F/F"], function (exports_63, context_63) {
    "use strict";
    var __moduleName = context_63 && context_63.id;
    return {
        setters: [
            function (F_js_1_1) {
                exports_63({
                    "F": F_js_1_1["F"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/filter/filter", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_64, context_64) {
    "use strict";
    var sign_16, signatures, implementation, filter;
    var __moduleName = context_64 && context_64.id;
    return {
        setters: [
            function (sign_16_1) {
                sign_16 = sign_16_1;
            }
        ],
        execute: function () {
            exports_64("signatures", signatures = [
                "filter :: (a => Boolean) => as => as",
                "filter ::                   as => as",
            ]);
            exports_64("implementation", implementation = (predicate) => (as) => as.filter(predicate));
            exports_64("filter", filter = sign_16.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/filter/index", ["file:///home/matt/@mwm/functional/source/filter/filter"], function (exports_65, context_65) {
    "use strict";
    var __moduleName = context_65 && context_65.id;
    return {
        setters: [
            function (filter_js_1_1) {
                exports_65({
                    "filter": filter_js_1_1["filter"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/has/has", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_66, context_66) {
    "use strict";
    var sign_17, hasOwnProperty, signatures, implementation, has;
    var __moduleName = context_66 && context_66.id;
    return {
        setters: [
            function (sign_17_1) {
                sign_17 = sign_17_1;
            }
        ],
        execute: function () {
            exports_66("hasOwnProperty", hasOwnProperty = {}.hasOwnProperty);
            exports_66("signatures", signatures = [
                "has :: k => a => boolean",
                "has ::      a => boolean",
            ]);
            exports_66("implementation", implementation = (k) => (a) => hasOwnProperty.call(a, k));
            exports_66("has", has = sign_17.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/has/index", ["file:///home/matt/@mwm/functional/source/has/has"], function (exports_67, context_67) {
    "use strict";
    var __moduleName = context_67 && context_67.id;
    return {
        setters: [
            function (has_js_1_1) {
                exports_67({
                    "has": has_js_1_1["has"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/head/head", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_68, context_68) {
    "use strict";
    var sign_18, signatures, implementation, head;
    var __moduleName = context_68 && context_68.id;
    return {
        setters: [
            function (sign_18_1) {
                sign_18 = sign_18_1;
            }
        ],
        execute: function () {
            exports_68("signatures", signatures = [{ "head :: as => a": 1 }]);
            exports_68("implementation", implementation = (as) => as[0]);
            exports_68("head", head = sign_18.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/head/index", ["file:///home/matt/@mwm/functional/source/head/head"], function (exports_69, context_69) {
    "use strict";
    var __moduleName = context_69 && context_69.id;
    return {
        setters: [
            function (head_js_1_1) {
                exports_69({
                    "head": head_js_1_1["head"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/identity/identity", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_70, context_70) {
    "use strict";
    var sign_19, signatures, implementation, identity;
    var __moduleName = context_70 && context_70.id;
    return {
        setters: [
            function (sign_19_1) {
                sign_19 = sign_19_1;
            }
        ],
        execute: function () {
            exports_70("signatures", signatures = [{ "identity :: a => a": 1 }]);
            exports_70("implementation", implementation = (value) => value);
            exports_70("identity", identity = sign_19.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/identity/index", ["file:///home/matt/@mwm/functional/source/identity/identity"], function (exports_71, context_71) {
    "use strict";
    var __moduleName = context_71 && context_71.id;
    return {
        setters: [
            function (identity_js_1_1) {
                exports_71({
                    "identity": identity_js_1_1["identity"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/ifElse/ifElse", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_72, context_72) {
    "use strict";
    var sign_20, signatures, implementation, ifElse;
    var __moduleName = context_72 && context_72.id;
    return {
        setters: [
            function (sign_20_1) {
                sign_20 = sign_20_1;
            }
        ],
        execute: function () {
            exports_72("signatures", signatures = [
                "ifElse->predicate :: (a => Boolean) => (a => b) => (a => c) => a => b|c",
                "ifElse->onTrue    ::                   (a => b) => (a => c) => a => b|c",
                "ifElse->onFalse   ::                               (a => c) => a => b|c",
                "ifElse->finally   ::                                           a => b|c",
            ]);
            exports_72("implementation", implementation = (predicate) => (mapAB) => (mapAC) => (a) => predicate(a) ? mapAB(a) : mapAC(a));
            exports_72("ifElse", ifElse = sign_20.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/ifElse/index", ["file:///home/matt/@mwm/functional/source/ifElse/ifElse"], function (exports_73, context_73) {
    "use strict";
    var __moduleName = context_73 && context_73.id;
    return {
        setters: [
            function (ifElse_js_1_1) {
                exports_73({
                    "ifElse": ifElse_js_1_1["ifElse"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/iife/iife", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_74, context_74) {
    "use strict";
    var sign_21, implementation, signatures, iife;
    var __moduleName = context_74 && context_74.id;
    return {
        setters: [
            function (sign_21_1) {
                sign_21 = sign_21_1;
            }
        ],
        execute: function () {
            exports_74("implementation", implementation = (f) => (...as) => f(...as));
            exports_74("signatures", signatures = [
                "iife :: (...as => b) => ...as => b",
                "iife ::                 ...as => b",
            ]);
            exports_74("iife", iife = sign_21.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/iife/index", ["file:///home/matt/@mwm/functional/source/iife/iife"], function (exports_75, context_75) {
    "use strict";
    var __moduleName = context_75 && context_75.id;
    return {
        setters: [
            function (iife_js_1_1) {
                exports_75({
                    "iife": iife_js_1_1["iife"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/init/init", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_76, context_76) {
    "use strict";
    var sign_22, signatures, implementation, init;
    var __moduleName = context_76 && context_76.id;
    return {
        setters: [
            function (sign_22_1) {
                sign_22 = sign_22_1;
            }
        ],
        execute: function () {
            exports_76("signatures", signatures = ["init :: as => as"]);
            exports_76("implementation", implementation = (as) => as.slice(0, as.length - 1));
            exports_76("init", init = sign_22.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/init/index", ["file:///home/matt/@mwm/functional/source/init/init"], function (exports_77, context_77) {
    "use strict";
    var __moduleName = context_77 && context_77.id;
    return {
        setters: [
            function (init_js_1_1) {
                exports_77({
                    "init": init_js_1_1["init"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/invoker/invoker", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_78, context_78) {
    "use strict";
    var sign_23, signatures, implementation, invoker;
    var __moduleName = context_78 && context_78.id;
    return {
        setters: [
            function (sign_23_1) {
                sign_23 = sign_23_1;
            }
        ],
        execute: function () {
            exports_78("signatures", signatures = [
                { "invoker->method    :: k => (...as) => (b.k => c) => c": 1 },
                { "invoker->arguments ::      (...as) => (b.k => c) => c": Infinity },
                { "invoker->context   ::                 (b.k => c) => c": 1 },
            ]);
            exports_78("implementation", implementation = (k) => (...as) => (b) => b[k](...as));
            exports_78("invoker", invoker = sign_23.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/invoker/index", ["file:///home/matt/@mwm/functional/source/invoker/invoker"], function (exports_79, context_79) {
    "use strict";
    var __moduleName = context_79 && context_79.id;
    return {
        setters: [
            function (invoker_js_1_1) {
                exports_79({
                    "invoker": invoker_js_1_1["invoker"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/isEmpty/isEmpty", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_80, context_80) {
    "use strict";
    var sign_24, signatures, implementation, isEmpty;
    var __moduleName = context_80 && context_80.id;
    return {
        setters: [
            function (sign_24_1) {
                sign_24 = sign_24_1;
            }
        ],
        execute: function () {
            exports_80("signatures", signatures = [{ "isEmpty :: a => Boolean": 1 }]);
            exports_80("implementation", implementation = (value) => (Array.isArray(value) && value.length === 0) ||
                (typeof value === "string" && value.length === 0) ||
                (typeof value === "object" &&
                    value !== null &&
                    Object.keys(value).length === 0));
            exports_80("isEmpty", isEmpty = sign_24.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/isEmpty/index", ["file:///home/matt/@mwm/functional/source/isEmpty/isEmpty"], function (exports_81, context_81) {
    "use strict";
    var __moduleName = context_81 && context_81.id;
    return {
        setters: [
            function (isEmpty_js_1_1) {
                exports_81({
                    "isEmpty": isEmpty_js_1_1["isEmpty"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/isFunction/isFunction", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_82, context_82) {
    "use strict";
    var sign_25, signatures, implementation, isFunction;
    var __moduleName = context_82 && context_82.id;
    return {
        setters: [
            function (sign_25_1) {
                sign_25 = sign_25_1;
            }
        ],
        execute: function () {
            exports_82("signatures", signatures = ["isFunction :: a => boolean"]);
            exports_82("implementation", implementation = (a) => typeof a === "function");
            exports_82("isFunction", isFunction = sign_25.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/isFunction/index", ["file:///home/matt/@mwm/functional/source/isFunction/isFunction"], function (exports_83, context_83) {
    "use strict";
    var __moduleName = context_83 && context_83.id;
    return {
        setters: [
            function (isFunction_js_1_1) {
                exports_83({
                    "isFunction": isFunction_js_1_1["isFunction"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/isNil/isNil", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_84, context_84) {
    "use strict";
    var sign_26, signatures, implementation, isNil;
    var __moduleName = context_84 && context_84.id;
    return {
        setters: [
            function (sign_26_1) {
                sign_26 = sign_26_1;
            }
        ],
        execute: function () {
            exports_84("signatures", signatures = ["isNil :: a => boolean"]);
            exports_84("implementation", implementation = (a) => a === null || a === undefined);
            exports_84("isNil", isNil = sign_26.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/isNil/index", ["file:///home/matt/@mwm/functional/source/isNil/isNil"], function (exports_85, context_85) {
    "use strict";
    var __moduleName = context_85 && context_85.id;
    return {
        setters: [
            function (isNil_js_1_1) {
                exports_85({
                    "isNil": isNil_js_1_1["isNil"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/join/join", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_86, context_86) {
    "use strict";
    var sign_27, signatures, implementation, join;
    var __moduleName = context_86 && context_86.id;
    return {
        setters: [
            function (sign_27_1) {
                sign_27 = sign_27_1;
            }
        ],
        execute: function () {
            exports_86("signatures", signatures = [
                { "join->withCharacter :: s => as => s": 1 },
                { "join->list          ::      as => s": 1 },
            ]);
            exports_86("implementation", implementation = (s) => (as) => as.join(s));
            exports_86("join", join = sign_27.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/join/index", ["file:///home/matt/@mwm/functional/source/join/join"], function (exports_87, context_87) {
    "use strict";
    var __moduleName = context_87 && context_87.id;
    return {
        setters: [
            function (join_js_1_1) {
                exports_87({
                    "join": join_js_1_1["join"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/last/last", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_88, context_88) {
    "use strict";
    var sign_28, signatures, implementation, last;
    var __moduleName = context_88 && context_88.id;
    return {
        setters: [
            function (sign_28_1) {
                sign_28 = sign_28_1;
            }
        ],
        execute: function () {
            exports_88("signatures", signatures = [{ "last :: as => a": 1 }]);
            exports_88("implementation", implementation = (as) => as[as.length - 1]);
            exports_88("last", last = sign_28.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/last/index", ["file:///home/matt/@mwm/functional/source/last/last"], function (exports_89, context_89) {
    "use strict";
    var __moduleName = context_89 && context_89.id;
    return {
        setters: [
            function (last_js_1_1) {
                exports_89({
                    "last": last_js_1_1["last"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/log/log", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_90, context_90) {
    "use strict";
    var sign_29, signatures, implementation, log;
    var __moduleName = context_90 && context_90.id;
    return {
        setters: [
            function (sign_29_1) {
                sign_29 = sign_29_1;
            }
        ],
        execute: function () {
            exports_90("signatures", signatures = [
                "log :: s => a => a",
                "log ::      a => a",
            ]);
            exports_90("implementation", implementation = (s) => (a) => {
                console.groupCollapsed(s);
                console.log(a);
                console.groupEnd;
                return a;
            });
            exports_90("log", log = sign_29.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/log/index", ["file:///home/matt/@mwm/functional/source/log/log"], function (exports_91, context_91) {
    "use strict";
    var __moduleName = context_91 && context_91.id;
    return {
        setters: [
            function (log_js_1_1) {
                exports_91({
                    "log": log_js_1_1["log"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/map/map", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_92, context_92) {
    "use strict";
    var sign_30, signatures, implementation, map;
    var __moduleName = context_92 && context_92.id;
    return {
        setters: [
            function (sign_30_1) {
                sign_30 = sign_30_1;
            }
        ],
        execute: function () {
            exports_92("signatures", signatures = [
                { "map :: (a => b) => as => bs": 1 },
                { "map ::             as => bs": 1 },
            ]);
            exports_92("implementation", implementation = (mapAB) => (as) => as.map(mapAB));
            exports_92("map", map = sign_30.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/map/index", ["file:///home/matt/@mwm/functional/source/map/map"], function (exports_93, context_93) {
    "use strict";
    var __moduleName = context_93 && context_93.id;
    return {
        setters: [
            function (map_js_1_1) {
                exports_93({
                    "map": map_js_1_1["map"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/merge/merge", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_94, context_94) {
    "use strict";
    var sign_31, signatures, implementation, merge;
    var __moduleName = context_94 && context_94.id;
    return {
        setters: [
            function (sign_31_1) {
                sign_31 = sign_31_1;
            }
        ],
        execute: function () {
            exports_94("signatures", signatures = [
                { "merge :: a => b => c": 1 },
                { "merge ::      b => c": 1 },
            ]);
            exports_94("implementation", implementation = (a) => (b) => Object.assign({}, a, b));
            exports_94("merge", merge = sign_31.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/merge/index", ["file:///home/matt/@mwm/functional/source/merge/merge"], function (exports_95, context_95) {
    "use strict";
    var __moduleName = context_95 && context_95.id;
    return {
        setters: [
            function (merge_js_1_1) {
                exports_95({
                    "merge": merge_js_1_1["merge"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/not/not", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_96, context_96) {
    "use strict";
    var sign_32, signatures, implementation, not;
    var __moduleName = context_96 && context_96.id;
    return {
        setters: [
            function (sign_32_1) {
                sign_32 = sign_32_1;
            }
        ],
        execute: function () {
            exports_96("signatures", signatures = ["not :: a => boolean"]);
            exports_96("implementation", implementation = (value) => !value);
            exports_96("not", not = sign_32.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/not/index", ["file:///home/matt/@mwm/functional/source/not/not"], function (exports_97, context_97) {
    "use strict";
    var __moduleName = context_97 && context_97.id;
    return {
        setters: [
            function (not_js_1_1) {
                exports_97({
                    "not": not_js_1_1["not"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/partial/partial", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_98, context_98) {
    "use strict";
    var sign_33, signatures, implementation, partial;
    var __moduleName = context_98 && context_98.id;
    return {
        setters: [
            function (sign_33_1) {
                sign_33 = sign_33_1;
            }
        ],
        execute: function () {
            exports_98("signatures", signatures = [
                { "partial :: (a¹, a², …, aⁿ => b) => (a¹, …) => ... => (…, aⁿ) => b": 1 },
                { "partial :: (a¹, …) => ... => (…, aⁿ) => b": Infinity },
            ]);
            exports_98("implementation", implementation = (f) => function g(...as) {
                const signatures = [{ [`${f.name}${as.length} :: ...as => b`]: Infinity }];
                return as.length < f.length
                    ? sign_33.sign(signatures, (...bs) => g(...as, ...bs))
                    : f(...as);
            });
            exports_98("partial", partial = sign_33.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/partial/index", ["file:///home/matt/@mwm/functional/source/partial/partial"], function (exports_99, context_99) {
    "use strict";
    var __moduleName = context_99 && context_99.id;
    return {
        setters: [
            function (partial_js_1_1) {
                exports_99({
                    "partial": partial_js_1_1["partial"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/pipe/pipe", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_100, context_100) {
    "use strict";
    var sign_34, signatures, reducer, implementation, pipe;
    var __moduleName = context_100 && context_100.id;
    return {
        setters: [
            function (sign_34_1) {
                sign_34 = sign_34_1;
            }
        ],
        execute: function () {
            exports_100("signatures", signatures = [
                { "pipe :: ((...as => b), (b => c), ..., (y => z)) => ...as => z": Infinity },
                { "pipe ::                                            ...as => z": Infinity },
            ]);
            reducer = (v, f) => f(v);
            exports_100("implementation", implementation = (...functions) => (...as) => {
                const [f, ...fs] = functions;
                return fs.reduce(reducer, f(...as));
            });
            exports_100("pipe", pipe = sign_34.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/pipe/index", ["file:///home/matt/@mwm/functional/source/pipe/pipe"], function (exports_101, context_101) {
    "use strict";
    var __moduleName = context_101 && context_101.id;
    return {
        setters: [
            function (pipe_js_1_1) {
                exports_101({
                    "pipe": pipe_js_1_1["pipe"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/pipeV/pipeV", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_102, context_102) {
    "use strict";
    var sign_35, signatures, implementation, pipeV;
    var __moduleName = context_102 && context_102.id;
    return {
        setters: [
            function (sign_35_1) {
                sign_35 = sign_35_1;
            }
        ],
        execute: function () {
            exports_102("signatures", signatures = [
                {
                    "pipeV :: (...as) => ((a⁰ => a¹), (a¹ => a²), ..., (aⁿ=> b)) =>  b": Infinity,
                },
                {
                    "pipeV ::            ((a⁰ => a¹), (a¹ => a²), ..., (aⁿ=> b)) =>  b": Infinity,
                },
            ]);
            exports_102("implementation", implementation = (...as) => (f, ...fs) => fs.reduce((a, f) => f(a), f(...as)));
            exports_102("pipeV", pipeV = sign_35.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/pipeV/index", ["file:///home/matt/@mwm/functional/source/pipeV/pipeV"], function (exports_103, context_103) {
    "use strict";
    var __moduleName = context_103 && context_103.id;
    return {
        setters: [
            function (pipeV_js_1_1) {
                exports_103({
                    "pipeV": pipeV_js_1_1["pipeV"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/prop/prop", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_104, context_104) {
    "use strict";
    var sign_36, signatures, implementation, prop;
    var __moduleName = context_104 && context_104.id;
    return {
        setters: [
            function (sign_36_1) {
                sign_36 = sign_36_1;
            }
        ],
        execute: function () {
            exports_104("signatures", signatures = [
                "prop->key :: k => a.k => b",
                "prop      ::      a.k => b",
            ]);
            exports_104("implementation", implementation = (k) => (a) => a[k]);
            exports_104("prop", prop = sign_36.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/prop/index", ["file:///home/matt/@mwm/functional/source/prop/prop"], function (exports_105, context_105) {
    "use strict";
    var __moduleName = context_105 && context_105.id;
    return {
        setters: [
            function (prop_js_1_1) {
                exports_105({
                    "prop": prop_js_1_1["prop"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/reduce/reduce", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_106, context_106) {
    "use strict";
    var sign_37, signatures, implementation, reduce;
    var __moduleName = context_106 && context_106.id;
    return {
        setters: [
            function (sign_37_1) {
                sign_37 = sign_37_1;
            }
        ],
        execute: function () {
            exports_106("signatures", signatures = [
                "reduce->reducer     :: ((a, b) => a) => a => [b⁰, b¹, b², ..., bⁿ] => a",
                "reduce->accumulator ::                  a => [b⁰, b¹, b², ..., bⁿ] => a",
                "reduce              ::                       [b⁰, b¹, b², ..., bⁿ] => a",
            ]);
            exports_106("implementation", implementation = (reducer) => (accumulator) => (iterable) => {
                if (iterable.length > 0) {
                    const [value, ...reducedArray] = iterable;
                    const reducedAccumulator = reducer(accumulator, value);
                    return reduce(reducer)(reducedAccumulator)(reducedArray);
                }
                else {
                    return accumulator;
                }
            });
            exports_106("reduce", reduce = sign_37.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/reduce/index", ["file:///home/matt/@mwm/functional/source/reduce/reduce"], function (exports_107, context_107) {
    "use strict";
    var __moduleName = context_107 && context_107.id;
    return {
        setters: [
            function (reduce_js_1_1) {
                exports_107({
                    "reduce": reduce_js_1_1["reduce"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/reduceRight/reduceRight", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_108, context_108) {
    "use strict";
    var sign_38, signatures, implementation, reduceRight;
    var __moduleName = context_108 && context_108.id;
    return {
        setters: [
            function (sign_38_1) {
                sign_38 = sign_38_1;
            }
        ],
        execute: function () {
            exports_108("signatures", signatures = [
                "reduceRight->reducer     :: ((a, b) => a) => a => [bⁿ, ..., b², b¹, b⁰] => a",
                "reduceRight->accumulator ::                  a => [bⁿ, ..., b², b¹, b⁰] => a",
                "reduceRight              ::                       [bⁿ, ..., b², b¹, b⁰] => a",
            ]);
            exports_108("implementation", implementation = (r) => (a) => (bs) => {
                if (bs && bs.length > 0) {
                    const [value] = bs.slice(-1);
                    const reducedArray = bs.slice(0, -1);
                    const reducedAccumulator = r(a, value);
                    return implementation(r)(reducedAccumulator)(reducedArray);
                }
                else {
                    return a;
                }
            });
            exports_108("reduceRight", reduceRight = sign_38.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/reduceRight/index", ["file:///home/matt/@mwm/functional/source/reduceRight/reduceRight"], function (exports_109, context_109) {
    "use strict";
    var __moduleName = context_109 && context_109.id;
    return {
        setters: [
            function (reduceRight_js_1_1) {
                exports_109({
                    "reduceRight": reduceRight_js_1_1["reduceRight"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/replace/replace", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_110, context_110) {
    "use strict";
    var sign_39, signatures, implementation, replace;
    var __moduleName = context_110 && context_110.id;
    return {
        setters: [
            function (sign_39_1) {
                sign_39 = sign_39_1;
            }
        ],
        execute: function () {
            exports_110("signatures", signatures = [
                "replace->what   :: (s|r) => s => s => s",
                "replace->with   ::          s => s => s",
                "replace->within ::               s => s",
            ]);
            exports_110("implementation", implementation = (what) => (replacement) => (within) => within.replace(what, replacement));
            exports_110("replace", replace = sign_39.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/replace/index", ["file:///home/matt/@mwm/functional/source/replace/replace"], function (exports_111, context_111) {
    "use strict";
    var __moduleName = context_111 && context_111.id;
    return {
        setters: [
            function (replace_js_1_1) {
                exports_111({
                    "replace": replace_js_1_1["replace"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/slice/slice", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_112, context_112) {
    "use strict";
    var sign_40, signatures, implementation, slice;
    var __moduleName = context_112 && context_112.id;
    return {
        setters: [
            function (sign_40_1) {
                sign_40 = sign_40_1;
            }
        ],
        execute: function () {
            exports_112("signatures", signatures = [
                "slice->begin :: n => m => as => as",
                "slice->end   ::      m => as => as",
                "slice->list  ::           as => as",
            ]);
            exports_112("implementation", implementation = (n) => (m) => (as) => as && typeof as.slice === "function"
                ? as.slice(n, m)
                : [...as].slice(n, m));
            exports_112("slice", slice = sign_40.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/slice/index", ["file:///home/matt/@mwm/functional/source/slice/slice"], function (exports_113, context_113) {
    "use strict";
    var __moduleName = context_113 && context_113.id;
    return {
        setters: [
            function (slice_js_1_1) {
                exports_113({
                    "slice": slice_js_1_1["slice"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/sort/sort", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_114, context_114) {
    "use strict";
    var sign_41, signatures, implementation, sort;
    var __moduleName = context_114 && context_114.id;
    return {
        setters: [
            function (sign_41_1) {
                sign_41 = sign_41_1;
            }
        ],
        execute: function () {
            exports_114("signatures", signatures = [
                "sort->sortingFunction :: ((a, a) => n) => as => as",
                "sort->list            ::                  as => as",
            ]);
            exports_114("implementation", implementation = (mapAAN) => (as) => [...as].sort(mapAAN));
            exports_114("sort", sort = sign_41.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/sort/index", ["file:///home/matt/@mwm/functional/source/sort/sort"], function (exports_115, context_115) {
    "use strict";
    var __moduleName = context_115 && context_115.id;
    return {
        setters: [
            function (sort_js_1_1) {
                exports_115({
                    "sort": sort_js_1_1["sort"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/split/split", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_116, context_116) {
    "use strict";
    var sign_42, signatures, implementation, split;
    var __moduleName = context_116 && context_116.id;
    return {
        setters: [
            function (sign_42_1) {
                sign_42 = sign_42_1;
            }
        ],
        execute: function () {
            exports_116("signatures", signatures = [
                { "split :: s => s => ss": 1 },
                { "split ::      s => ss": 1 },
            ]);
            exports_116("implementation", implementation = (a) => (b) => b.split(a));
            exports_116("split", split = sign_42.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/split/index", ["file:///home/matt/@mwm/functional/source/split/split"], function (exports_117, context_117) {
    "use strict";
    var __moduleName = context_117 && context_117.id;
    return {
        setters: [
            function (split_js_1_1) {
                exports_117({
                    "split": split_js_1_1["split"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/T/T", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_118, context_118) {
    "use strict";
    var sign_43, signatures, implementation, T;
    var __moduleName = context_118 && context_118.id;
    return {
        setters: [
            function (sign_43_1) {
                sign_43 = sign_43_1;
            }
        ],
        execute: function () {
            exports_118("signatures", signatures = ["T :: a => true"]);
            exports_118("implementation", implementation = (a) => true);
            exports_118("T", T = sign_43.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/T/index", ["file:///home/matt/@mwm/functional/source/T/T"], function (exports_119, context_119) {
    "use strict";
    var __moduleName = context_119 && context_119.id;
    return {
        setters: [
            function (T_js_1_1) {
                exports_119({
                    "T": T_js_1_1["T"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/tail/tail", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_120, context_120) {
    "use strict";
    var sign_44, signatures, implementation, tail;
    var __moduleName = context_120 && context_120.id;
    return {
        setters: [
            function (sign_44_1) {
                sign_44 = sign_44_1;
            }
        ],
        execute: function () {
            exports_120("signatures", signatures = ["tail :: as => as"]);
            exports_120("implementation", implementation = (as) => as.slice(1));
            exports_120("tail", tail = sign_44.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/tail/index", ["file:///home/matt/@mwm/functional/source/tail/tail"], function (exports_121, context_121) {
    "use strict";
    var __moduleName = context_121 && context_121.id;
    return {
        setters: [
            function (tail_js_1_1) {
                exports_121({
                    "tail": tail_js_1_1["tail"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/take/take", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_122, context_122) {
    "use strict";
    var sign_45, signatures, implementation, take;
    var __moduleName = context_122 && context_122.id;
    return {
        setters: [
            function (sign_45_1) {
                sign_45 = sign_45_1;
            }
        ],
        execute: function () {
            exports_122("signatures", signatures = [
                { "take :: n => as => as": 1 },
                { "take ::      as => as": 1 },
            ]);
            exports_122("implementation", implementation = (n) => (as) => as.slice(0, n));
            exports_122("take", take = sign_45.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/take/index", ["file:///home/matt/@mwm/functional/source/take/take"], function (exports_123, context_123) {
    "use strict";
    var __moduleName = context_123 && context_123.id;
    return {
        setters: [
            function (take_js_1_1) {
                exports_123({
                    "take": take_js_1_1["take"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/tap/tap", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_124, context_124) {
    "use strict";
    var sign_46, signatures, implementation, tap;
    var __moduleName = context_124 && context_124.id;
    return {
        setters: [
            function (sign_46_1) {
                sign_46 = sign_46_1;
            }
        ],
        execute: function () {
            exports_124("signatures", signatures = [
                "tap :: (a => *) => a => a",
                "tap ::             a => a",
            ]);
            exports_124("implementation", implementation = (f) => (a) => {
                f(a);
                return a;
            });
            exports_124("tap", tap = sign_46.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/tap/index", ["file:///home/matt/@mwm/functional/source/tap/tap"], function (exports_125, context_125) {
    "use strict";
    var __moduleName = context_125 && context_125.id;
    return {
        setters: [
            function (tap_js_1_1) {
                exports_125({
                    "tap": tap_js_1_1["tap"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/toUnary/toUnary", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_126, context_126) {
    "use strict";
    var sign_47, signatures, implementation, toUnary;
    var __moduleName = context_126 && context_126.id;
    return {
        setters: [
            function (sign_47_1) {
                sign_47 = sign_47_1;
            }
        ],
        execute: function () {
            exports_126("signatures", signatures = [
                { "toUnary->variadic :: (...as => b) => as => b": 1 },
                { "toUnary->array    ::                 as => b": 1 },
            ]);
            exports_126("implementation", implementation = (variadic) => (as) => variadic(...as));
            exports_126("toUnary", toUnary = sign_47.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/toUnary/index", ["file:///home/matt/@mwm/functional/source/toUnary/toUnary"], function (exports_127, context_127) {
    "use strict";
    var __moduleName = context_127 && context_127.id;
    return {
        setters: [
            function (toUnary_js_1_1) {
                exports_127({
                    "toUnary": toUnary_js_1_1["toUnary"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/toVariadic/toVariadic", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_128, context_128) {
    "use strict";
    var sign_48, signatures, implementation, toVariadic;
    var __moduleName = context_128 && context_128.id;
    return {
        setters: [
            function (sign_48_1) {
                sign_48 = sign_48_1;
            }
        ],
        execute: function () {
            exports_128("signatures", signatures = [
                { "toVariadic->unary     :: (as => b) => ...as => b": 1 },
                { "toVariadic->arguments ::              ...as => b": Infinity },
            ]);
            exports_128("implementation", implementation = (unary) => (...as) => unary(as));
            exports_128("toVariadic", toVariadic = sign_48.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/toVariadic/index", ["file:///home/matt/@mwm/functional/source/toVariadic/toVariadic"], function (exports_129, context_129) {
    "use strict";
    var __moduleName = context_129 && context_129.id;
    return {
        setters: [
            function (toVariadic_js_1_1) {
                exports_129({
                    "toVariadic": toVariadic_js_1_1["toVariadic"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/trim/trim", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_130, context_130) {
    "use strict";
    var sign_49, signatures, implementation, trim;
    var __moduleName = context_130 && context_130.id;
    return {
        setters: [
            function (sign_49_1) {
                sign_49 = sign_49_1;
            }
        ],
        execute: function () {
            exports_130("signatures", signatures = ["trim :: s => s"]);
            exports_130("implementation", implementation = (s) => String(s).trim());
            exports_130("trim", trim = sign_49.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/trim/index", ["file:///home/matt/@mwm/functional/source/trim/trim"], function (exports_131, context_131) {
    "use strict";
    var __moduleName = context_131 && context_131.id;
    return {
        setters: [
            function (trim_js_1_1) {
                exports_131({
                    "trim": trim_js_1_1["trim"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/uncurry/uncurry", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_132, context_132) {
    "use strict";
    var sign_50, signatures, applyArgument, implementation, uncurry;
    var __moduleName = context_132 && context_132.id;
    return {
        setters: [
            function (sign_50_1) {
                sign_50 = sign_50_1;
            }
        ],
        execute: function () {
            exports_132("signatures", signatures = [
                "uncurry->length  :: n => (a¹ => a² => ... => aⁿ => b) => (a¹, a², ..., aⁿ) => b",
                "uncurry->curried ::      (a¹ => a² => ... => aⁿ => b) => (a¹, a², ..., aⁿ) => b",
            ]);
            applyArgument = (currentStep, argument) => currentStep(argument);
            exports_132("implementation", implementation = (length) => (curried) => (...allArguments) => {
                const expectedArguments = allArguments.slice(0, length);
                return expectedArguments.reduce(applyArgument, curried);
            });
            exports_132("uncurry", uncurry = sign_50.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/uncurry/index", ["file:///home/matt/@mwm/functional/source/uncurry/uncurry"], function (exports_133, context_133) {
    "use strict";
    var __moduleName = context_133 && context_133.id;
    return {
        setters: [
            function (uncurry_js_1_1) {
                exports_133({
                    "uncurry": uncurry_js_1_1["uncurry"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/unless/unless", ["file:///home/matt/@mwm/functional/lib/sign"], function (exports_134, context_134) {
    "use strict";
    var sign_51, signatures, implementation, unless;
    var __moduleName = context_134 && context_134.id;
    return {
        setters: [
            function (sign_51_1) {
                sign_51 = sign_51_1;
            }
        ],
        execute: function () {
            exports_134("signatures", signatures = [
                "unless->predicate :: (a => boolean) => (a => b) => a => a|b",
                "unless->action    ::                   (a => b) => a => a|b",
                "unless            ::                               a => a|b",
            ]);
            exports_134("implementation", implementation = (predicate) => (mapAB) => (a) => predicate(a) ? a : mapAB(a));
            exports_134("unless", unless = sign_51.sign(signatures, implementation));
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/unless/index", ["file:///home/matt/@mwm/functional/source/unless/unless"], function (exports_135, context_135) {
    "use strict";
    var __moduleName = context_135 && context_135.id;
    return {
        setters: [
            function (unless_js_1_1) {
                exports_135({
                    "unless": unless_js_1_1["unless"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/index", ["file:///home/matt/@mwm/functional/source/always/index", "file:///home/matt/@mwm/functional/source/assoc/index", "file:///home/matt/@mwm/functional/source/bind/index", "file:///home/matt/@mwm/functional/source/blackbird/index", "file:///home/matt/@mwm/functional/source/both/index", "file:///home/matt/@mwm/functional/source/clone/index", "file:///home/matt/@mwm/functional/source/complement/index", "file:///home/matt/@mwm/functional/source/compose/index", "file:///home/matt/@mwm/functional/source/curry/index", "file:///home/matt/@mwm/functional/source/curryN/index", "file:///home/matt/@mwm/functional/source/defaultTo/index", "file:///home/matt/@mwm/functional/source/either/index", "file:///home/matt/@mwm/functional/source/equals/index", "file:///home/matt/@mwm/functional/source/F/index", "file:///home/matt/@mwm/functional/source/filter/index", "file:///home/matt/@mwm/functional/source/has/index", "file:///home/matt/@mwm/functional/source/head/index", "file:///home/matt/@mwm/functional/source/identity/index", "file:///home/matt/@mwm/functional/source/ifElse/index", "file:///home/matt/@mwm/functional/source/iife/index", "file:///home/matt/@mwm/functional/source/init/index", "file:///home/matt/@mwm/functional/source/invoker/index", "file:///home/matt/@mwm/functional/source/isDefined/index", "file:///home/matt/@mwm/functional/source/isEmpty/index", "file:///home/matt/@mwm/functional/source/isFunction/index", "file:///home/matt/@mwm/functional/source/isNil/index", "file:///home/matt/@mwm/functional/source/join/index", "file:///home/matt/@mwm/functional/source/last/index", "file:///home/matt/@mwm/functional/source/log/index", "file:///home/matt/@mwm/functional/source/map/index", "file:///home/matt/@mwm/functional/source/merge/index", "file:///home/matt/@mwm/functional/source/not/index", "file:///home/matt/@mwm/functional/source/partial/index", "file:///home/matt/@mwm/functional/source/pipe/index", "file:///home/matt/@mwm/functional/source/pipeV/index", "file:///home/matt/@mwm/functional/source/prop/index", "file:///home/matt/@mwm/functional/source/reduce/index", "file:///home/matt/@mwm/functional/source/reduceRight/index", "file:///home/matt/@mwm/functional/source/replace/index", "file:///home/matt/@mwm/functional/source/slice/index", "file:///home/matt/@mwm/functional/source/sort/index", "file:///home/matt/@mwm/functional/source/split/index", "file:///home/matt/@mwm/functional/source/T/index", "file:///home/matt/@mwm/functional/source/tail/index", "file:///home/matt/@mwm/functional/source/take/index", "file:///home/matt/@mwm/functional/source/tap/index", "file:///home/matt/@mwm/functional/source/toUnary/index", "file:///home/matt/@mwm/functional/source/toVariadic/index", "file:///home/matt/@mwm/functional/source/trim/index", "file:///home/matt/@mwm/functional/source/uncurry/index", "file:///home/matt/@mwm/functional/source/unless/index"], function (exports_136, context_136) {
    "use strict";
    var __moduleName = context_136 && context_136.id;
    return {
        setters: [
            function (index_js_3_1) {
                exports_136({
                    "always": index_js_3_1["always"]
                });
            },
            function (index_js_4_1) {
                exports_136({
                    "assoc": index_js_4_1["assoc"]
                });
            },
            function (index_js_5_1) {
                exports_136({
                    "bind": index_js_5_1["bind"]
                });
            },
            function (index_js_6_1) {
                exports_136({
                    "blackbird": index_js_6_1["blackbird"]
                });
            },
            function (index_js_7_1) {
                exports_136({
                    "both": index_js_7_1["both"]
                });
            },
            function (index_js_8_1) {
                exports_136({
                    "clone": index_js_8_1["clone"]
                });
            },
            function (index_js_9_1) {
                exports_136({
                    "complement": index_js_9_1["complement"]
                });
            },
            function (index_js_10_1) {
                exports_136({
                    "compose": index_js_10_1["compose"]
                });
            },
            function (index_js_11_1) {
                exports_136({
                    "curry": index_js_11_1["curry"]
                });
            },
            function (index_js_12_1) {
                exports_136({
                    "curryN": index_js_12_1["curryN"]
                });
            },
            function (index_js_13_1) {
                exports_136({
                    "defaultTo": index_js_13_1["defaultTo"]
                });
            },
            function (index_js_14_1) {
                exports_136({
                    "either": index_js_14_1["either"]
                });
            },
            function (index_js_15_1) {
                exports_136({
                    "equals": index_js_15_1["equals"]
                });
            },
            function (index_js_16_1) {
                exports_136({
                    "F": index_js_16_1["F"]
                });
            },
            function (index_js_17_1) {
                exports_136({
                    "filter": index_js_17_1["filter"]
                });
            },
            function (index_js_18_1) {
                exports_136({
                    "has": index_js_18_1["has"]
                });
            },
            function (index_js_19_1) {
                exports_136({
                    "head": index_js_19_1["head"]
                });
            },
            function (index_js_20_1) {
                exports_136({
                    "identity": index_js_20_1["identity"]
                });
            },
            function (index_js_21_1) {
                exports_136({
                    "ifElse": index_js_21_1["ifElse"]
                });
            },
            function (index_js_22_1) {
                exports_136({
                    "iife": index_js_22_1["iife"]
                });
            },
            function (index_js_23_1) {
                exports_136({
                    "init": index_js_23_1["init"]
                });
            },
            function (index_js_24_1) {
                exports_136({
                    "invoker": index_js_24_1["invoker"]
                });
            },
            function (index_js_25_1) {
                exports_136({
                    "isDefined": index_js_25_1["isDefined"]
                });
            },
            function (index_js_26_1) {
                exports_136({
                    "isEmpty": index_js_26_1["isEmpty"]
                });
            },
            function (index_js_27_1) {
                exports_136({
                    "isFunction": index_js_27_1["isFunction"]
                });
            },
            function (index_js_28_1) {
                exports_136({
                    "isNil": index_js_28_1["isNil"]
                });
            },
            function (index_js_29_1) {
                exports_136({
                    "join": index_js_29_1["join"]
                });
            },
            function (index_js_30_1) {
                exports_136({
                    "last": index_js_30_1["last"]
                });
            },
            function (index_js_31_1) {
                exports_136({
                    "log": index_js_31_1["log"]
                });
            },
            function (index_js_32_1) {
                exports_136({
                    "map": index_js_32_1["map"]
                });
            },
            function (index_js_33_1) {
                exports_136({
                    "merge": index_js_33_1["merge"]
                });
            },
            function (index_js_34_1) {
                exports_136({
                    "not": index_js_34_1["not"]
                });
            },
            function (index_js_35_1) {
                exports_136({
                    "partial": index_js_35_1["partial"]
                });
            },
            function (index_js_36_1) {
                exports_136({
                    "pipe": index_js_36_1["pipe"]
                });
            },
            function (index_js_37_1) {
                exports_136({
                    "pipeV": index_js_37_1["pipeV"]
                });
            },
            function (index_js_38_1) {
                exports_136({
                    "prop": index_js_38_1["prop"]
                });
            },
            function (index_js_39_1) {
                exports_136({
                    "reduce": index_js_39_1["reduce"]
                });
            },
            function (index_js_40_1) {
                exports_136({
                    "reduceRight": index_js_40_1["reduceRight"]
                });
            },
            function (index_js_41_1) {
                exports_136({
                    "replace": index_js_41_1["replace"]
                });
            },
            function (index_js_42_1) {
                exports_136({
                    "slice": index_js_42_1["slice"]
                });
            },
            function (index_js_43_1) {
                exports_136({
                    "sort": index_js_43_1["sort"]
                });
            },
            function (index_js_44_1) {
                exports_136({
                    "split": index_js_44_1["split"]
                });
            },
            function (index_js_45_1) {
                exports_136({
                    "T": index_js_45_1["T"]
                });
            },
            function (index_js_46_1) {
                exports_136({
                    "tail": index_js_46_1["tail"]
                });
            },
            function (index_js_47_1) {
                exports_136({
                    "take": index_js_47_1["take"]
                });
            },
            function (index_js_48_1) {
                exports_136({
                    "tap": index_js_48_1["tap"]
                });
            },
            function (index_js_49_1) {
                exports_136({
                    "toUnary": index_js_49_1["toUnary"]
                });
            },
            function (index_js_50_1) {
                exports_136({
                    "toVariadic": index_js_50_1["toVariadic"]
                });
            },
            function (index_js_51_1) {
                exports_136({
                    "trim": index_js_51_1["trim"]
                });
            },
            function (index_js_52_1) {
                exports_136({
                    "uncurry": index_js_52_1["uncurry"]
                });
            },
            function (index_js_53_1) {
                exports_136({
                    "unless": index_js_53_1["unless"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("file:///home/matt/@mwm/functional/source/index.test", ["file:///home/matt/@mwm/functional/lib/describe", "file:///home/matt/@mwm/functional/source/index"], function (exports_137, context_137) {
    "use strict";
    var describe_1, functional;
    var __moduleName = context_137 && context_137.id;
    return {
        setters: [
            function (describe_1_1) {
                describe_1 = describe_1_1;
            },
            function (functional_1) {
                functional = functional_1;
            }
        ],
        execute: function () {
            describe_1.describe("module exports", ({ assert }) => {
                const actual = Object.keys(functional).sort();
                const expected = [
                    "always",
                    "assoc",
                    "bind",
                    "blackbird",
                    "both",
                    "clone",
                    "complement",
                    "compose",
                    "curry",
                    "curryN",
                    "defaultTo",
                    "either",
                    "equals",
                    "F",
                    "filter",
                    "has",
                    "head",
                    "identity",
                    "ifElse",
                    "iife",
                    "init",
                    "invoker",
                    "isDefined",
                    "isEmpty",
                    "isFunction",
                    "isNil",
                    "join",
                    "last",
                    "log",
                    "map",
                    "merge",
                    "not",
                    "partial",
                    "pipe",
                    "pipeV",
                    "prop",
                    "reduce",
                    "reduceRight",
                    "replace",
                    "slice",
                    "sort",
                    "split",
                    "T",
                    "tail",
                    "take",
                    "tap",
                    "toUnary",
                    "toVariadic",
                    "trim",
                    "uncurry",
                    "unless",
                ].sort();
                assert({ actual, expected });
            });
        }
    };
});

__instantiate("file:///home/matt/@mwm/functional/source/index.test");

