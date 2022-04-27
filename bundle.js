// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
/* eslint-disable */
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const always = (a)=>(..._bs)=>a
;
const isArray = Array.isArray;
const isDate = (a)=>a instanceof Date
;
const isObject = (a)=>typeof a === "object"
;
const isDefined = (a)=>a != null
;
function cloneObject(a, map1) {
    if (map1.has(a)) {
        return map1.get(a);
    } else {
        const clone1 = {};
        map1.set(a, clone1);
        Object.entries(a).reduce((clone2, [key, value])=>{
            return Object.assign(clone2, {
                [key]: cloneUnknown(value, map1)
            });
        }, clone1);
        return clone1;
    }
}
function cloneDate(a) {
    return new Date(a.valueOf());
}
function cloneArray(a, map2) {
    if (map2.has(a)) {
        return map2.get(a);
    } else {
        const clone3 = [];
        map2.set(a, clone3);
        return a.reduce((clone4, v)=>{
            clone4.push(cloneUnknown(v, map2));
            return clone4;
        }, clone3);
    }
}
function cloneUnknown(a, map3) {
    const t = isDefined(a) ? isDate(a) ? cloneDate(a) : isArray(a) ? cloneArray(a, map3) : isObject(a) ? cloneObject(a, map3) : a : a;
    return t;
}
const clone = (a)=>cloneUnknown(a, new WeakMap())
;
const assoc = (k)=>(b)=>(a)=>Object.assign(clone(a), {
                [k]: b
            })
;
const bind = (m)=>(b)=>m.bind(b)
;
const blackbird = (converging)=>(...parts)=>(a)=>{
            const bs = parts.map((part)=>part(a)
            );
            return converging(...bs);
        }
;
const both = (mapAB)=>(mapAC)=>(a)=>mapAB(a) && mapAC(a)
;
const cap = (word)=>typeof word === "string" && word.length > 0 ? word[0].toLocaleUpperCase() + word.substr(1) : word
;
const complement = (predicate)=>(a)=>!predicate(a)
;
function compose(...fs) {
    return (a)=>fs.reduceRight((v, f)=>f(v)
        , a)
    ;
}
const concat = (as)=>(bs)=>[
            ...as,
            ...bs
        ]
;
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
const curryN = (n)=>(f)=>gather(n, f)
;
const curry = (f)=>curryN(f.length)(f)
;
const isNaN = (a)=>Number.isNaN(a)
;
const defaultTo = (a)=>(b)=>isNaN(b) ? a : isDefined(b) ? b : a
;
const either = (mapAB)=>(mapAC)=>(a)=>mapAB(a) || mapAC(a)
;
const equals = (a)=>(b)=>a === b
;
const F = (..._)=>false
;
const filter = (p)=>(as)=>as.filter(p)
;
function flow(f1) {
    const map4 = (f)=>next(p, f)
    ;
    const invoke = (a)=>f1(a)
    ;
    const invoker1 = ()=>invoke
    ;
    const p = Object.assign(invoke.bind(null), {
        invoke,
        invoker: invoker1,
        map: map4,
        then: map4
    });
    return p;
}
function next(prev, f2) {
    const invoke = (a)=>f2(prev(a))
    ;
    const map5 = (f)=>next(p, f)
    ;
    const invoker2 = ()=>invoke
    ;
    const p = Object.assign(invoke.bind(null), {
        invoke,
        invoker: invoker2,
        map: map5,
        then: map5
    });
    return p;
}
function fluentCompose(f1) {
    function invoke(b) {
        return f1(b);
    }
    const p = Object.assign(invoke.bind(null), {
        after: (f)=>{
            return after(p, f);
        },
        invoke
    });
    return p;
}
function after(next1, f2) {
    function invoke(c) {
        return next1(f2(c));
    }
    const p = Object.assign(invoke.bind(null), {
        after: (f)=>after(p, f)
        ,
        invoke
    });
    return p;
}
const has = (k)=>(a)=>a != null && Object.prototype.hasOwnProperty.call(a, k)
;
const head = (as)=>as[0]
;
const identity = (a)=>a
;
const ifElse = (predicate, whenTrue, whenFalse)=>(x)=>predicate(x) ? whenTrue(x) : whenFalse(x)
;
const iife = (f, ...as)=>f(...as)
;
const init = (as)=>as.slice(0, -1)
;
const invoker = (k)=>(...as)=>(c)=>c[k](...as)
;
const isEmpty = (a)=>a instanceof Map ? a.size === 0 : a instanceof Set ? a.size === 0 : isCountable(a) ? a.length === 0 : typeof a === "object" && a !== null && Object.keys(a).length === 0
;
function isCountable(a) {
    if (a != null) {
        const descriptor = Object.getOwnPropertyDescriptor(a, "length");
        if (descriptor?.enumerable === false) {
            return true;
        }
    }
    return false;
}
const isFunction = (a)=>typeof a === "function"
;
const isNil = (a)=>a === null || a === undefined
;
const isNumber = (a)=>typeof a === "number"
;
const isString = (a)=>typeof a === "string"
;
const join = (a)=>(bs)=>bs.join(a)
;
const last = (as)=>as[as.length - 1]
;
const log = (s)=>(a)=>{
        console.groupCollapsed(s);
        console.log(a);
        console.groupEnd();
        return a;
    }
;
const map = (ab)=>(as)=>as.map(ab)
;
const mapV = (ab)=>(...as)=>as.map(ab)
;
const merge = (a)=>(b)=>Object.assign({}, a, b)
;
const not = (a)=>!a
;
const orDefault = (defaultValue)=>(value)=>value ?? defaultValue
;
const partial = (...as)=>(f)=>(...bs)=>f(...as, ...bs)
;
function pipe(...fs) {
    return (a)=>fs.reduce((v, f)=>f(v)
        , a)
    ;
}
const pipeV = (...as)=>(f1, ...fs)=>fs.reduce((a, f)=>f(a)
        , f1(...as))
;
const prop = (k)=>(a)=>a[k]
;
const reduce = (r)=>(b)=>(as)=>as.reduce(r, b)
;
const reduceRight = (reducer)=>(a)=>(bs)=>bs.length > 0 ? bs.reduceRight(reducer, a) : a
;
const replace = (searchValue)=>(replaceValue)=>(within)=>within.replace(searchValue, replaceValue)
;
const reverse = (as)=>Array.from(as).reverse()
;
const slice = (n)=>(m)=>(as)=>Array.from(as).slice(n, m)
;
const sort = (compare)=>(as)=>Array.from(as).sort(compare)
;
const split = (separator, limit)=>(source)=>separator == undefined ? [
            source
        ] : separator === "" ? Array.from(source).slice(0, limit) : source.split(separator, limit)
;
const T = (..._)=>true
;
const tail = ([, ...as])=>as
;
const take = (n)=>(as)=>as.slice(0, n)
;
const tap = (f)=>(a)=>{
        f(a);
        return a;
    }
;
const toArray = (as)=>Array.from(as)
;
const toString = (a)=>`${a}`
;
function toUnary(v) {
    return (as)=>v(...as)
    ;
}
const toVariadic = (u)=>(...as)=>u(as)
;
const trim = (s)=>s.trim()
;
const applyArgument = (currentStep, a)=>currentStep(a)
;
const uncurry = (length)=>(curried)=>(...allArguments)=>{
            const expectedArguments = allArguments.slice(0, length);
            return expectedArguments.reduce(applyArgument, curried);
        }
;
const unless = (p)=>(mapXB)=>(a)=>p(a) ? a : mapXB(a)
;
const zip = (as)=>(bs)=>{
        const zipped = [];
        const max = Math.max(as.length, bs.length);
        for(let i = 0; i < max; i++){
            if (as.length > i) {
                zipped.push(as[i]);
            }
            if (bs.length > i) {
                zipped.push(bs[i]);
            }
        }
        return zipped;
    }
;
export { always as always };
export { assoc as assoc };
export { bind as bind };
export { blackbird as blackbird };
export { both as both };
export { cap as cap };
export { clone as clone };
export { complement as complement };
export { compose as compose };
export { concat as concat };
export { curry as curry };
export { curryN as curryN };
export { defaultTo as defaultTo };
export { either as either };
export { equals as equals };
export { F as F };
export { filter as filter };
export { flow as flow };
export { fluentCompose as fluentCompose };
export { has as has };
export { head as head };
export { identity as identity };
export { ifElse as ifElse };
export { iife as iife };
export { init as init };
export { invoker as invoker };
export { isArray as isArray };
export { isDate as isDate };
export { isDefined as isDefined };
export { isEmpty as isEmpty };
export { isFunction as isFunction };
export { isNaN as isNaN };
export { isNil as isNil };
export { isNumber as isNumber };
export { isObject as isObject };
export { isString as isString };
export { join as join };
export { last as last };
export { log as log };
export { map as map };
export { mapV as mapV };
export { merge as merge };
export { not as not };
export { orDefault as orDefault };
export { partial as partial };
export { pipe as pipe };
export { pipeV as pipeV };
export { prop as prop };
export { reduce as reduce };
export { reduceRight as reduceRight };
export { replace as replace };
export { reverse as reverse };
export { slice as slice };
export { sort as sort };
export { split as split };
export { T as T };
export { tail as tail };
export { take as take };
export { tap as tap };
export { toArray as toArray };
export { toString as toString };
export { toUnary as toUnary };
export { toVariadic as toVariadic };
export { trim as trim };
export { uncurry as uncurry };
export { unless as unless };
export { zip as zip };

