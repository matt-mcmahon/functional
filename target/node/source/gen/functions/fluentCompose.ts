type FluentCompose<B, A> = {
  (b: B): A;
  after<C>(f: (c: C) => B): FluentCompose<C, A>;
  invoke(b: B): A;
};

/**
 * ```haskell
 * fluentCompose :: (aⁿ⁻¹ => aⁿ)...after(a¹ => a²).after(a⁰ => a¹).invoke(a⁰) => aⁿ
 * ```
 *
 * Takes any number, _n_, unary Functions of the form `aⁿ⁻¹ => aⁿ`, and composes them in a right-to-left order, passing the value, _a⁰_, to the last _after_ , the return value, _a¹_ to the next-to-last, etc., finally returning _aⁿ_. For example:
 *
 * ```
 * fluentCompose(h).after(g).after(f).invoke(a) <=> h(g(f(a)))
 *
 * fluentCompose(h).after(g).after(f)(a)
 *
 * const fgh = fluentCompose(h).after(g).after(f)
 * fgh(a) <=> fgh.invoke(a)
 * ```
 */
export function fluentCompose<B, A>(f: (b: B) => A): FluentCompose<B, A> {
  function invoke(b: B): A {
    return f(b);
  }

  const p: FluentCompose<B, A> = Object.assign(invoke.bind(null), {
    after: <C>(f: (c: C) => B): FluentCompose<C, A> => {
      return after<C, B, A>(p, f);
    },
    invoke,
  });
  return p;
}

function after<C, B, A>(next: FluentCompose<B, A>, f: (c: C) => B) {
  function invoke(c: C): A {
    return next(f(c));
  }

  const p: FluentCompose<C, A> = Object.assign(invoke.bind(null), {
    after: <D>(f: (d: D) => C) => after<D, C, A>(p, f),
    invoke,
  });
  return p;
}
