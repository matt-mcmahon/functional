declare type FluentCompose<B, A> = {
    (b: B): A;
    after<C>(f: (c: C) => B): FluentCompose<C, A>;
    invoke(b: B): A;
};
export declare function fluentCompose<B, A>(f: (b: B) => A): FluentCompose<B, A>;
export {};
//# sourceMappingURL=fluentCompose.d.ts.map