export declare const unless: <X, A extends X>(p: (a: X) => a is A) => <B>(mapXB: (x: X) => B) => (a: X) => A | B;
