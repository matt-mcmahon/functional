export declare const prop: <K extends string | number | symbol>(k: K) => <B>(a: { [P in K]: B; }) => B;
