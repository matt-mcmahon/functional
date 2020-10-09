export declare const uncurry: (length: number) => <A extends unknown, AS extends unknown[], B>(curried: (a: A) => B) => (...allArguments: AS) => (a: A) => B;
