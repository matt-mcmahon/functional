export declare type Mappable<A, B> = {
    map(ab: (a: A) => B): B[];
};
export declare const map: <A, B>(ab: (a: A) => B) => (as: Mappable<A, B>) => B[];
//# sourceMappingURL=map.d.ts.map