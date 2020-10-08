import { Last } from "../types";
export declare type Compose<B, A> = {
    (b: B): A;
    call(a: A): B;
    from<C>(f: (c: C) => B): Compose<C, A>;
};
export declare const compose: (<FS extends ((x: any) => any)[]>(...fs: FS) => (a: Parameters<Last<FS>>[0]) => ReturnType<FS[0]>) & {
    fluent: <B, A>(f: (b: B) => A) => Compose<B, A>;
};
