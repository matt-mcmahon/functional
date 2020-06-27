import { Compose } from "../types"

const last = <B, A>(f: (b: B) => A): Compose<B, A> => {
  function call(b: B): A {
    return f(b)
  }

  const p: Compose<B, A> = Object.assign(call.bind(null), {
    from: <C>(f: (c: C) => B): Compose<C, A> => {
      return after<C, B, A>(p, f)
    },
    call,
  })
  return p
}

const after = <C, B, A>(next: Compose<B, A>, f: (c: C) => B) => {
  function call(c: C): A {
    return next(f(c))
  }
  const p: Compose<C, A> = Object.assign(call.bind(null), {
    from: <D>(f: (d: D) => C) => {
      return after<D, C, A>(p, f)
    },
    call,
  })
  return p
}

export { last as compose }
