import { sign } from "@mwm/sign";

export const signatures = ["trim :: s => s"];

export const implementation = (s) => String(s).trim();

/**
 * ```
 * trim :: s => s
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a string and trims any whitespace characters that appear at the
 * beginning or end, as in:
 *
 * ```
 * trim(" s ") <=> " s ".trim() <=> "s"
 * ```
 *
 */
export const trim = sign(signatures, implementation);
