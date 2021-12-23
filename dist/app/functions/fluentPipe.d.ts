declare type FluentPipe<A, B> = {
    (a: A): B;
    then: <C>(Fbc: (b: B) => C) => FluentPipe<A, C>;
    invoke: (a: A) => B;
};
export declare function fluentPipe<A, B>(f: (a: A) => B): FluentPipe<A, B>;
export {};
//# sourceMappingURL=fluentPipe.d.ts.map