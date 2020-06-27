import { Compose } from "../types";
declare const last: <B, A>(f: (b: B) => A) => Compose<B, A>;
export { last as compose };
