# @mwm/functional

Experimental, extremely-minimal, functional library with a focus on clear source-code and readable function signatures.
I've deliberately designed each function so that browsers and IDEs will generate readable function signatures and easy to debug code.
Further, every exported function has an even simpler, [haskell-style][3], `function.signature` string that you can examine.


## Rational

Some of the challenges I've encountered learning [Functional Programming][6] in JavaScript
are obtuse function signatures and implementations that are hard to debug.
This project is designed to remedy these issues.


The goal is to provide simple, debuggable, functional programming building blocks that anyone can use while learning FP concepts.
Implementations will be largely stand-alone, easy to read, and easy to debug.
As a consequence, many of our functions will contain duplicate and unoptimized code,
but easing the readability and reducing the cognitive load should be worth that trade-off.

This library is not meant to replace well-tested and engineered libraries like [lodash/fp][7] or [Ramda][8].
Instead, it's primarily meant to be a learning aid.
I'll be using this library as part of the tutorials you can find at my [website][1] and [GitHub][2] profile. Please check them out!


## Credits

To keep this library simple and easily debuggable, I'll occasionally copy code from other projects into this project (instead of importing it).
When this is done, the license will be included in the source-code for that function, and (with permission) give credit both here and in _package.json_'s `contributor` field.





[1]: http://matt-mcmahon.com/
[2]: https://github.com/matt-mcmahon
[3]: https://www.holger-peters.de/haskell-by-types.html
[4]: https://www.npmjs.com/package/deep-clone
[5]: https://www.npmjs.com/~thebearingedge
[6]: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
[7]: https://github.com/lodash/lodash/wiki/FP-Guide
[8]: http://ramdajs.com/
