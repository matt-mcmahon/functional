type Flow<A, B> = {
  (a: A): B
  then: <C>(Fbc: (b: B) => C) => Flow<A, C>
  invoke: (a: A) => B
  map: <C>(Fbc: (b: B) => C) => Flow<A, C>
  invoker: () => (a: A) => B
}

/**
 * ```haskell
 * flow :: (a⁰ => a¹).next(a¹ => a²)...next(aⁿ⁻¹ -> aⁿ).invoke(a⁰) => aⁿ
 * ```
 *
 * Type-safe fluent-pipe API. Takes any number, _n_, unary `next` Functions of the form `aˣ => aˣ⁺¹`, and composes them in a left-to-right order, passing the value, _a⁰_, to the left-most function, the return value, _a¹_ to the next-left-most function, etc., finally returning _aⁿ_. For example:
 *
 * ```
 * flow(f).map(g).map(h).invoke(a) <=> h(g(f(a)))
 *
 * flow(f).then(g).then(h)(a)
 *
 * const fgh = flow(f).then(g).then(h)
 * const alt = flow(f).then(g).then(h).invoker()
 *
 * alt(a) <=> fgh(a) <=> fgh.invoke(a)
 * ```
 */
export function flow<A, B>(f: (a: A) => B): Flow<A, B> {
  const map = <C>(f: (b: B) => C): Flow<A, C> => next<A, B, C>(p, f)
  const invoke = (a: A) => f(a)
  const invoker = () => invoke

  const p: Flow<A, B> = Object.assign(invoke.bind(null), {
    invoke,
    invoker,
    map,
    then: map,
  })

  return p
}

function next<A, B, C>(prev: Flow<A, B>, f: (b: B) => C): Flow<A, C> {
  const invoke = (a: A) => f(prev(a))
  const map = <D>(f: (c: C) => D): Flow<A, D> => next<A, C, D>(p, f)
  const invoker = () => invoke

  const p: Flow<A, C> = Object.assign(invoke.bind(null), {
    invoke,
    invoker,
    map,
    then: map,
  })
  return p
}
