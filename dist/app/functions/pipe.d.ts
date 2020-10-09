import { Last } from "../types";
export declare type Pipe<A, B> = {
    (a: A): B;
    then: <C>(f: (b: B) => C) => Pipe<A, C>;
    invoke(a: A): B;
};
export declare const pipe: (<FS extends ((x: any) => any)[]>(...fs: FS) => (a: Parameters<FS[0]>[0]) => ReturnType<Last<FS>>) & {
    fluent: <A, B>(f: (a: A) => B) => Pipe<A, B>;
};
