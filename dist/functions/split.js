"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
/**
 * ```
 * split->at   :: s => s => ss
 * split->what ::      s => ss
 * ```
 * -----------------------------------------------------------------------------
 *
 * splits a _string_ into one or more parts at the given _char_. For example:
 *
 * ```
 * const s = "one two three"
 * split(" ")(s) <=> s.split(" ") <=> ["one", "two", "three"]
 * ```
 */
exports.split = (separator, limit) => (source) => separator == undefined
    ? [source]
    : separator === ""
        ? Array.from(source)
        : source.split(separator);
//# sourceMappingURL=split.js.map