export declare const invoker: <K extends string | number | symbol>(k: K) => <AS extends unknown[]>(...as: AS) => <B>(c: { [_ in K]: (...as: AS) => B; }) => B;
//# sourceMappingURL=invoker.d.ts.map