type FluentPipe<A, B> = {
  (a: A): B
  then: <C>(Fbc: (b: B) => C) => FluentPipe<A, C>
  invoke: (a: A) => B
}

/**
 * ```haskell
 * fluentPipe :: (a⁰ => a¹).next(a¹ => a²)...next(aⁿ⁻¹ -> aⁿ).invoke(a⁰) => aⁿ
 * ```
 *
 * Type-safe fluent-pipe API. Takes any number, _n_, unary `next` Functions of the form `aˣ => aˣ⁺¹`, and composes them in a left-to-right order, passing the value, _a⁰_, to the left-most function, the return value, _a¹_ to the next-left-most function, etc., finally returning _aⁿ_. For example:
 *
 * ```
 * fluent(f).next(g).next(h).invoke(a) <=> h(g(f(a)))
 *
 * fluent(f).then(g).then(h)(a)
 *
 * const fgh = pipe.fluent(f).then(g).then(h)
 * fgh(a) <=> fgh.invoke(a)
 * ```
 */
export function fluentPipe<A, B>(f: (a: A) => B): FluentPipe<A, B> {
  function invoke(a: A) {
    return f(a)
  }

  const p: FluentPipe<A, B> = Object.assign(invoke.bind(null), {
    then: <C>(f: (b: B) => C): FluentPipe<A, C> => next<A, B, C>(p, f),
    invoke,
  })

  return p
}

function next<A, B, C>(
  prev: FluentPipe<A, B>,
  f: (b: B) => C
): FluentPipe<A, C> {
  function invoke(a: A) {
    return f(prev(a))
  }

  const then = <D>(f: (c: C) => D): FluentPipe<A, D> => next<A, C, D>(p, f)

  const p: FluentPipe<A, C> = Object.assign(invoke.bind(null), {
    invoke,
    then,
  })
  return p
}
