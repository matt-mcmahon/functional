import { First, Last } from "../types";
export declare function compose<FS extends ((x: any) => any)[]>(...fs: FS): (a: First<Parameters<Last<FS>>>) => ReturnType<First<FS>>;
//# sourceMappingURL=compose.d.ts.map