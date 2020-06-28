export interface Pipe<A, B> {
    (a: A): B;
    then: <C>(f: (b: B) => C) => Pipe<A, C>;
    call(a: A): B;
}
declare const first: <A, B>(f: (a: A) => B) => Pipe<A, B>;
export { first as pipe };
