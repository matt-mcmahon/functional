export declare const partial: <AS extends Args>(...as: AS) => <BS extends Args, C>(f: (...args: [...AS, ...BS]) => C) => (...bs: BS) => C;
export declare type Args = readonly unknown[];
//# sourceMappingURL=partial.d.ts.map