export declare const invoker: <K extends PropertyKey>(k: K) => <AS extends unknown[]>(...as: AS) => <B>(c: { [k in K]: (...as: AS) => B; }) => B;
//# sourceMappingURL=invoker.d.ts.map