// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
const always1 = (a)=>(..._bs)=>a
;
export { always1 as always };
const assoc1 = (k)=>(b)=>(a)=>Object.assign(clone1(a), {
                [k]: b
            })
;
export { assoc1 as assoc };
const bind1 = (m)=>(b)=>m.bind(b)
;
export { bind1 as bind };
const blackbird1 = (converging)=>(...parts)=>(a)=>{
            const bs = parts.map((part)=>part(a)
            );
            return converging(...bs);
        }
;
export { blackbird1 as blackbird };
const both1 = (first)=>(second)=>(a)=>first(a) && second(a)
;
export { both1 as both };
const cap1 = (word)=>typeof word === "string" && word.length > 0 ? word[0].toLocaleUpperCase() + word.substr(1) : word
;
export { cap1 as cap };
function cloneObject(a, map) {
    if (map.has(a)) {
        return map.get(a);
    } else {
        const clone = {
        };
        map.set(a, clone);
        Object.entries(a).reduce((clone1, [key, value])=>{
            return Object.assign(clone1, {
                [key]: cloneUnknown(value, map)
            });
        }, clone);
        return clone;
    }
}
function cloneDate(a) {
    return new Date(a.valueOf());
}
function cloneArray(a, map) {
    if (map.has(a)) {
        return map.get(a);
    } else {
        const clone = [];
        map.set(a, clone);
        return a.reduce((clone1, v)=>{
            clone1.push(cloneUnknown(v, map));
            return clone1;
        }, clone);
    }
}
function cloneUnknown(a, map) {
    const t = isDefined1(a) ? isDate1(a) ? cloneDate(a) : isArray1(a) ? cloneArray(a, map) : isObject1(a) ? cloneObject(a, map) : a : a;
    return t;
}
function clone1(a) {
    const map = new WeakMap();
    return cloneUnknown(a, map);
}
export { clone1 as clone };
const complement1 = (predicate)=>(a)=>!predicate(a)
;
export { complement1 as complement };
const fluent = (f)=>{
    function call(b) {
        return f(b);
    }
    const p = Object.assign(call.bind(null), {
        from: (f1)=>{
            return after(p, f1);
        },
        call
    });
    return p;
};
const after = (next, f)=>{
    function call(c) {
        return next(f(c));
    }
    const p = Object.assign(call.bind(null), {
        from: (f1)=>{
            return after(p, f1);
        },
        call
    });
    return p;
};
const compose1 = Object.assign((...fs)=>{
    return (a)=>fs.reduceRight((v, f)=>f(v)
        , a)
    ;
}, {
    fluent
});
export { compose1 as compose };
const concat1 = (as)=>(bs)=>[
            ...as,
            ...bs
        ]
;
export { concat1 as concat };
const curry1 = (f)=>curryN1(f.length)(f)
;
export { curry1 as curry };
const gather = (n, f, previous = [])=>{
    const curried = (...as)=>{
        const args = [
            ...previous,
            ...as
        ];
        const remaining = n - args.length;
        return remaining > 0 ? gather(n, f, args) : f(...args.slice(0, n));
    };
    Object.defineProperties(curried, {
        length: {
            value: n - previous.length
        },
        name: {
            value: `${f.name}${previous.length}`
        }
    });
    return curried;
};
const curryN1 = (n)=>(f)=>gather(n, f)
;
export { curryN1 as curryN };
const defaultTo1 = (a)=>(b)=>isNaN1(b) ? a : isDefined1(b) ? b : a
;
export { defaultTo1 as defaultTo };
const either1 = (mapAB)=>(mapAC)=>(a)=>mapAB(a) || mapAC(a)
;
export { either1 as either };
const equals1 = (a)=>(b)=>a === b
;
export { equals1 as equals };
const F1 = (...ignored)=>false
;
export { F1 as F };
const filter1 = (p)=>(as)=>as.filter(p)
;
export { filter1 as filter };
const has1 = (k)=>(a)=>Object.prototype.hasOwnProperty.call(a, k)
;
export { has1 as has };
const head1 = (as)=>as[0]
;
export { head1 as head };
const identity1 = (a)=>a
;
export { identity1 as identity };
const ifElse1 = (predicate, whenTrue, whenFalse)=>(x)=>predicate(x) ? whenTrue(x) : whenFalse(x)
;
export { ifElse1 as ifElse };
const iife1 = (f, ...as)=>f(...as)
;
export { iife1 as iife };
const init1 = (as)=>as.slice(0, as.length - 1)
;
export { init1 as init };
const invoker1 = (k)=>(...as)=>(c)=>c[k](...as)
;
export { invoker1 as invoker };
const isArray1 = Array.isArray;
export { isArray1 as isArray };
const isDate1 = (a)=>a instanceof Date
;
export { isDate1 as isDate };
const isDefined1 = (a)=>a != null
;
export { isDefined1 as isDefined };
const isEmpty1 = (a)=>Array.isArray(a) && a.length === 0 || typeof a === "string" && a.length === 0 || typeof a === "object" && a !== null && Object.keys(a).length === 0
;
export { isEmpty1 as isEmpty };
const isFunction1 = (a)=>typeof a === "function"
;
export { isFunction1 as isFunction };
const isNaN1 = (a)=>Number.isNaN(a)
;
export { isNaN1 as isNaN };
const isNil1 = (a)=>a === null || a === undefined
;
export { isNil1 as isNil };
const isNumber1 = (a)=>typeof a === "number"
;
export { isNumber1 as isNumber };
const isObject1 = (a)=>typeof a === "object"
;
export { isObject1 as isObject };
const isString1 = (a)=>typeof a === "string"
;
export { isString1 as isString };
const join1 = (a)=>(bs)=>bs.join(a)
;
export { join1 as join };
const last1 = (as)=>as[as.length - 1]
;
export { last1 as last };
const log1 = (s)=>(a)=>{
        console.groupCollapsed(s);
        console.log(a);
        console.groupEnd();
        return a;
    }
;
export { log1 as log };
const map1 = (ab)=>(as)=>as.map(ab)
;
export { map1 as map };
const merge1 = (a)=>(b)=>Object.assign({
        }, a, b)
;
export { merge1 as merge };
const not1 = (a)=>!a
;
export { not1 as not };
const partial1 = (...as)=>(f)=>(...bs)=>f(...as, ...bs)
;
export { partial1 as partial };
const fluent1 = (f)=>{
    function invoke(a) {
        return f(a);
    }
    const p = Object.assign(invoke.bind(null), {
        then: (f1)=>{
            return next(p, f1);
        },
        invoke
    });
    return p;
};
const next = (prev, f)=>{
    function invoke(a) {
        return f(prev(a));
    }
    const p = Object.assign(invoke.bind(null), {
        then: (f1)=>{
            return next(p, f1);
        },
        invoke
    });
    return p;
};
const pipe1 = Object.assign((...fs)=>{
    return (a)=>fs.reduce((v, f)=>f(v)
        , a)
    ;
}, {
    fluent: fluent1
});
export { pipe1 as pipe };
const pipeV1 = (...as)=>(f, ...fs)=>fs.reduce((a, f1)=>f1(a)
        , f(...as))
;
export { pipeV1 as pipeV };
const prop1 = (k)=>(a)=>a[k]
;
export { prop1 as prop };
const reduce1 = (r)=>(b)=>(as)=>as.reduce(r, b)
;
export { reduce1 as reduce };
const reduceRight1 = (reducer)=>(a)=>(bs)=>bs.length > 0 ? bs.reduceRight(reducer, a) : a
;
export { reduceRight1 as reduceRight };
const replace1 = (searchValue)=>(replaceValue)=>(within)=>within.replace(searchValue, replaceValue)
;
export { replace1 as replace };
const reverse1 = (as)=>Array.from(as).reverse()
;
export { reverse1 as reverse };
const slice1 = (n)=>(m)=>(as)=>Array.from(as).slice(n, m)
;
export { slice1 as slice };
const sort1 = (compare)=>(as)=>Array.from(as).sort(compare)
;
export { sort1 as sort };
const split1 = (separator, limit)=>(source)=>separator == undefined ? [
            source
        ] : separator === "" ? Array.from(source).slice(0, limit) : source.split(separator, limit)
;
export { split1 as split };
const T1 = (...ignored)=>true
;
export { T1 as T };
const tail1 = ([, ...as])=>as
;
export { tail1 as tail };
const take1 = (n)=>(as)=>as.slice(0, n)
;
export { take1 as take };
const tap1 = (f)=>(a)=>{
        f(a);
        return a;
    }
;
export { tap1 as tap };
const toArray1 = (as)=>Array.from(as)
;
export { toArray1 as toArray };
const toString1 = (a)=>`${a}`
;
export { toString1 as toString };
function toUnary1(v) {
    return (as)=>v(...as)
    ;
}
export { toUnary1 as toUnary };
const toVariadic1 = (u)=>(...as)=>u(as)
;
export { toVariadic1 as toVariadic };
const trim1 = (s)=>s.trim()
;
export { trim1 as trim };
const applyArgument = (currentStep, a)=>currentStep(a)
;
const uncurry1 = (length)=>(curried)=>(...allArguments)=>{
            const expectedArguments = allArguments.slice(0, length);
            return expectedArguments.reduce(applyArgument, curried);
        }
;
export { uncurry1 as uncurry };
const unless1 = (p)=>(mapXB)=>(a)=>p(a) ? a : mapXB(a)
;
export { unless1 as unless };
function when1(isOkay) {
    return (mapAB)=>{
        return (a)=>isOkay(a) ? mapAB(a) : a
        ;
    };
}
export { when1 as when };

