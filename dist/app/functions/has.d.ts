export declare const has: <K extends string | number | symbol>(k: K) => (a: unknown) => a is { [P in K]: unknown; };
