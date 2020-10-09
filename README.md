# @mwm/functional

You're looking at an experimental, extremely-minimal, functional library with a focus on clear source-code and readable function signatures.
I've tried to design each function so that browsers and IDEs will generate readable function signatures and easy to debug code.
Further, every exported function has an even simpler, [haskell-style][3], `<function>.signature` string that you can examine.

## Rational

Some of the challenges I've encountered learning [Functional Programming][6] in JavaScript are obtuse function signatures and implementations that are hard to debug.
This project is designed to remedy these issues.

The goal is to provide simple, debuggable, functional programming building blocks that anyone can use while learning FP concepts.
Implementations should be largely stand-alone, easy to read, and easy to debug.
As a consequence, many of the included functions will contain duplicate and unoptimized code, but easier reading and reduced cognitive load should make the trade-off worthwhile.

This library is **not** meant to replace well-tested and engineered libraries like [lodash/fp][7] or [Ramda][8].
Instead, it's primarily meant to be a learning aid.
I'll be using this library as part of the tutorials you can find at my [website][1] and [GitHub][2] profile.
Please check them out … eventually!

## Compatibility

_Functional_ implements a subset of the [Ramda][8] API, but not the entire API.
When you're ready, you can easily replace the _Functional_ dependency with _Ramda_, without needing to refactor your code.

## Credits

To keep this library simple and easily debuggable, I'll occasionally copy code from projects that have a compatible license into this project (instead of importing it as a dependency).
When this is done, I'll include the original license with the source-code for that module, and (with permission) I'll give credit both here and in _package.json_'s `contributor` field.
Programming is hard work, and I can't thank the open-source community enough for the enormity of their multitudinous efforts!

## Special Thanks To:

- [Tim Davis][5], `clone` was based heavily on his [deep-clone][4] implementation.
- [Pierre-Antoine Mills][11], for his [How to master advanced TypeScript patterns][9] article on [freeCodeCamp][10] and [ts-toolbelt][12] library. His step-by-step guide on advanced TypeScript types is invaluable.

[1]: http://matthewcodes.com/
[2]: https://github.com/matt-mcmahon
[3]: https://www.holger-peters.de/haskell-by-types.html
[4]: https://www.npmjs.com/package/deep-clone
[5]: https://www.npmjs.com/~thebearingedge
[6]: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
[7]: https://github.com/lodash/lodash/wiki/FP-Guide
[8]: https://ramdajs.com/
[9]: https://www.freecodecamp.org/news/typescript-curry-ramda-types-f747e99744ab/
[10]: https://www.freecodecamp.org/
[11]: https://github.com/millsp
[12]: https://github.com/millsp/ts-toolbelt
