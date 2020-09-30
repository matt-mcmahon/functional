"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.always = void 0;
/**
 * ```
 * always :: a => * => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a function that always returns _a_, ignoring any arguments.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.always = (a) => (...bs) => a;
