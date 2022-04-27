declare type Flow<A, B> = {
    (a: A): B;
    then: <C>(Fbc: (b: B) => C) => Flow<A, C>;
    invoke: (a: A) => B;
    map: <C>(Fbc: (b: B) => C) => Flow<A, C>;
    invoker: () => (a: A) => B;
};
export declare function flow<A, B>(f: (a: A) => B): Flow<A, B>;
export {};
//# sourceMappingURL=flow.d.ts.map