export declare type Length<T extends unknown[]> = T["length"];
export declare type LastIndex<AS extends unknown[]> = AS extends [infer A, ...infer BS] ? Length<BS> : never;
export declare type Last<AS extends unknown[]> = AS[LastIndex<AS>];
export declare type First<AS extends unknown[]> = AS[0];
//# sourceMappingURL=types.d.ts.map