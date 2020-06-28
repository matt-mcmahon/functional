export interface Pipe<A, B> {
  (a: A): B
  then: <C>(f: (b: B) => C) => Pipe<A, C>
  call(a: A): B
}

const first = <A, B>(f: (a: A) => B): Pipe<A, B> => {
  function call(a: A) {
    return f(a)
  }
  const p: Pipe<A, B> = Object.assign(call.bind(null), {
    then: <C>(f: (b: B) => C): Pipe<A, C> => {
      return next<A, B, C>(p, f)
    },
    call,
  })
  return p
}

const next = <A, B, C>(prev: Pipe<A, B>, f: (b: B) => C) => {
  function call(a: A) {
    return f(prev(a))
  }
  const p: Pipe<A, C> = Object.assign(call.bind(null), {
    then: <D>(f: (c: C) => D): Pipe<A, D> => {
      return next<A, C, D>(p, f)
    },
    call,
  })
  return p
}

export { first as pipe }
