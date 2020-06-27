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
exports.always = (a) => (...bs) => a;
