import { First, Last } from "../types";
export declare function pipe<FS extends ((x: any) => any)[]>(...fs: FS): (a: First<Parameters<First<FS>>>) => ReturnType<Last<FS>>;
//# sourceMappingURL=pipe.d.ts.map