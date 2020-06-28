export interface Compose<B, A> {
    (b: B): A;
    from: <C>(f: (c: C) => B) => Compose<C, A>;
    call(a: A): B;
}
declare const last: <B, A>(f: (b: B) => A) => Compose<B, A>;
export { last as compose };
