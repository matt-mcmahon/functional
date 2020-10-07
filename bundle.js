// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
/* eslint-disable */
// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiate;
(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };
  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      const e = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(e)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
      return v;
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = (m, a) => {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

System.register("source/app/functions/always", [], function (exports_1, context_1) {
    "use strict";
    var always;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("always", always = (a) => (..._bs) => a);
        }
    };
});
System.register("source/app/functions/isArray", [], function (exports_2, context_2) {
    "use strict";
    var isArray;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("isArray", isArray = Array.isArray);
        }
    };
});
System.register("source/app/functions/isDate", [], function (exports_3, context_3) {
    "use strict";
    var isDate;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            exports_3("isDate", isDate = (a) => a instanceof Date);
        }
    };
});
System.register("source/app/functions/isObject", [], function (exports_4, context_4) {
    "use strict";
    var isObject;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            exports_4("isObject", isObject = (a) => typeof a === "object");
        }
    };
});
System.register("source/app/functions/isDefined", [], function (exports_5, context_5) {
    "use strict";
    var isDefined;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            exports_5("isDefined", isDefined = (a) => a != null);
        }
    };
});
System.register("source/app/functions/clone", ["source/app/functions/isArray", "source/app/functions/isDate", "source/app/functions/isObject", "source/app/functions/isDefined"], function (exports_6, context_6) {
    "use strict";
    var isArray_ts_1, isDate_ts_1, isObject_ts_1, isDefined_ts_1;
    var __moduleName = context_6 && context_6.id;
    function cloneObject(a, map) {
        if (map.has(a)) {
            return map.get(a);
        }
        else {
            const clone = {};
            map.set(a, clone);
            Object.entries(a).reduce((clone, [key, value]) => {
                return Object.assign(clone, { [key]: cloneUnknown(value, map) });
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
        }
        else {
            const clone = [];
            map.set(a, clone);
            return a.reduce((clone, v) => {
                clone.push(cloneUnknown(v, map));
                return clone;
            }, clone);
        }
    }
    function cloneUnknown(a, map) {
        const t = isDefined_ts_1.isDefined(a)
            ? isDate_ts_1.isDate(a)
                ? cloneDate(a)
                : isArray_ts_1.isArray(a)
                    ? cloneArray(a, map)
                    : isObject_ts_1.isObject(a)
                        ? cloneObject(a, map)
                        : a
            : a;
        return t;
    }
    function clone(a) {
        const map = new WeakMap();
        return cloneUnknown(a, map);
    }
    exports_6("clone", clone);
    return {
        setters: [
            function (isArray_ts_1_1) {
                isArray_ts_1 = isArray_ts_1_1;
            },
            function (isDate_ts_1_1) {
                isDate_ts_1 = isDate_ts_1_1;
            },
            function (isObject_ts_1_1) {
                isObject_ts_1 = isObject_ts_1_1;
            },
            function (isDefined_ts_1_1) {
                isDefined_ts_1 = isDefined_ts_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("source/app/functions/assoc", ["source/app/functions/clone"], function (exports_7, context_7) {
    "use strict";
    var clone_ts_1, assoc;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (clone_ts_1_1) {
                clone_ts_1 = clone_ts_1_1;
            }
        ],
        execute: function () {
            exports_7("assoc", assoc = (k) => (b) => (a) => Object.assign(clone_ts_1.clone(a), { [k]: b }));
        }
    };
});
System.register("source/app/functions/bind", [], function (exports_8, context_8) {
    "use strict";
    var bind;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            exports_8("bind", bind = (m) => (b) => m.bind(b));
        }
    };
});
System.register("source/app/functions/blackbird", [], function (exports_9, context_9) {
    "use strict";
    var blackbird;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [],
        execute: function () {
            exports_9("blackbird", blackbird = (converging) => (...parts) => (a) => {
                const bs = parts.map((part) => part(a));
                return converging(...bs);
            });
        }
    };
});
System.register("source/app/functions/both", [], function (exports_10, context_10) {
    "use strict";
    var both;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
            exports_10("both", both = (first) => (second) => (a) => first(a) && second(a));
        }
    };
});
System.register("source/app/functions/cap", [], function (exports_11, context_11) {
    "use strict";
    var cap;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
            exports_11("cap", cap = (word) => typeof word === "string" && word.length > 0
                ? word[0].toLocaleUpperCase() + word.substr(1)
                : word);
        }
    };
});
System.register("source/app/functions/complement", [], function (exports_12, context_12) {
    "use strict";
    var complement;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
            exports_12("complement", complement = (predicate) => (a) => !predicate(a));
        }
    };
});
System.register("source/app/functions/compose", [], function (exports_13, context_13) {
    "use strict";
    var fluent, after, compose;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
            fluent = (f) => {
                function call(b) {
                    return f(b);
                }
                const p = Object.assign(call.bind(null), {
                    from: (f) => {
                        return after(p, f);
                    },
                    call,
                });
                return p;
            };
            after = (next, f) => {
                function call(c) {
                    return next(f(c));
                }
                const p = Object.assign(call.bind(null), {
                    from: (f) => {
                        return after(p, f);
                    },
                    call,
                });
                return p;
            };
            exports_13("compose", compose = Object.assign((...fs) => {
                return (a) => fs.reduceRight((v, f) => f(v), a);
            }, { fluent }));
        }
    };
});
System.register("source/app/functions/concat", [], function (exports_14, context_14) {
    "use strict";
    var concat;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [],
        execute: function () {
            exports_14("concat", concat = (as) => (bs) => [...as, ...bs]);
        }
    };
});
System.register("source/app/functions/curryN", [], function (exports_15, context_15) {
    "use strict";
    var gather, curryN;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
            gather = (n, f, previous = []) => {
                const curried = (...as) => {
                    const args = [...previous, ...as];
                    const remaining = n - args.length;
                    return remaining > 0 ? gather(n, f, args) : f(...args.slice(0, n));
                };
                Object.defineProperties(curried, {
                    length: { value: n - previous.length },
                    name: { value: `${f.name}${previous.length}` },
                });
                return curried;
            };
            exports_15("curryN", curryN = (n) => (f) => gather(n, f));
        }
    };
});
System.register("source/app/functions/curry", ["source/app/functions/curryN"], function (exports_16, context_16) {
    "use strict";
    var curryN_ts_1, curry;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (curryN_ts_1_1) {
                curryN_ts_1 = curryN_ts_1_1;
            }
        ],
        execute: function () {
            exports_16("curry", curry = (f) => curryN_ts_1.curryN(f.length)(f));
        }
    };
});
System.register("source/app/functions/isNaN", [], function (exports_17, context_17) {
    "use strict";
    var isNaN;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [],
        execute: function () {
            exports_17("isNaN", isNaN = (a) => Number.isNaN(a));
        }
    };
});
System.register("source/app/functions/defaultTo", ["source/app/functions/isDefined", "source/app/functions/isNaN"], function (exports_18, context_18) {
    "use strict";
    var isDefined_ts_2, isNaN_ts_1, defaultTo;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (isDefined_ts_2_1) {
                isDefined_ts_2 = isDefined_ts_2_1;
            },
            function (isNaN_ts_1_1) {
                isNaN_ts_1 = isNaN_ts_1_1;
            }
        ],
        execute: function () {
            exports_18("defaultTo", defaultTo = (a) => (b) => isNaN_ts_1.isNaN(b) ? a : isDefined_ts_2.isDefined(b) ? b : a);
        }
    };
});
System.register("source/app/functions/either", [], function (exports_19, context_19) {
    "use strict";
    var either;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [],
        execute: function () {
            exports_19("either", either = (mapAB) => (mapAC) => (a) => mapAB(a) || mapAC(a));
        }
    };
});
System.register("source/app/functions/equals", [], function (exports_20, context_20) {
    "use strict";
    var equals;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [],
        execute: function () {
            exports_20("equals", equals = (a) => (b) => a === b);
        }
    };
});
System.register("source/app/functions/F", [], function (exports_21, context_21) {
    "use strict";
    var F;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [],
        execute: function () {
            exports_21("F", F = (...ignored) => false);
        }
    };
});
System.register("source/app/functions/filter", [], function (exports_22, context_22) {
    "use strict";
    var filter;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [],
        execute: function () {
            exports_22("filter", filter = (p) => (as) => as.filter(p));
        }
    };
});
System.register("source/app/functions/has", [], function (exports_23, context_23) {
    "use strict";
    var has;
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [],
        execute: function () {
            exports_23("has", has = (k) => (a) => Object.prototype.hasOwnProperty.call(a, k));
        }
    };
});
System.register("source/app/functions/head", [], function (exports_24, context_24) {
    "use strict";
    var head;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [],
        execute: function () {
            exports_24("head", head = (as) => as[0]);
        }
    };
});
System.register("source/app/functions/identity", [], function (exports_25, context_25) {
    "use strict";
    var identity;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [],
        execute: function () {
            exports_25("identity", identity = (a) => a);
        }
    };
});
System.register("source/app/functions/ifElse", [], function (exports_26, context_26) {
    "use strict";
    var ifElse;
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [],
        execute: function () {
            exports_26("ifElse", ifElse = (predicate, whenTrue, whenFalse) => (x) => (predicate(x) ? whenTrue(x) : whenFalse(x)));
        }
    };
});
System.register("source/app/functions/iife", [], function (exports_27, context_27) {
    "use strict";
    var iife;
    var __moduleName = context_27 && context_27.id;
    return {
        setters: [],
        execute: function () {
            exports_27("iife", iife = (f, ...as) => f(...as));
        }
    };
});
System.register("source/app/functions/init", [], function (exports_28, context_28) {
    "use strict";
    var init;
    var __moduleName = context_28 && context_28.id;
    return {
        setters: [],
        execute: function () {
            exports_28("init", init = (as) => as.slice(0, as.length - 1));
        }
    };
});
System.register("source/app/functions/invoker", [], function (exports_29, context_29) {
    "use strict";
    var invoker;
    var __moduleName = context_29 && context_29.id;
    return {
        setters: [],
        execute: function () {
            exports_29("invoker", invoker = (k) => (...as) => (c) => c[k](...as));
        }
    };
});
System.register("source/app/functions/isEmpty", [], function (exports_30, context_30) {
    "use strict";
    var isEmpty;
    var __moduleName = context_30 && context_30.id;
    return {
        setters: [],
        execute: function () {
            exports_30("isEmpty", isEmpty = (a) => (Array.isArray(a) && a.length === 0) ||
                (typeof a === "string" && a.length === 0) ||
                (typeof a === "object" && a !== null && Object.keys(a).length === 0));
        }
    };
});
System.register("source/app/functions/isFunction", [], function (exports_31, context_31) {
    "use strict";
    var isFunction;
    var __moduleName = context_31 && context_31.id;
    return {
        setters: [],
        execute: function () {
            exports_31("isFunction", isFunction = (a) => typeof a === "function");
        }
    };
});
System.register("source/app/functions/isNil", [], function (exports_32, context_32) {
    "use strict";
    var isNil;
    var __moduleName = context_32 && context_32.id;
    return {
        setters: [],
        execute: function () {
            exports_32("isNil", isNil = (a) => a === null || a === undefined);
        }
    };
});
System.register("source/app/functions/isNumber", [], function (exports_33, context_33) {
    "use strict";
    var isNumber;
    var __moduleName = context_33 && context_33.id;
    return {
        setters: [],
        execute: function () {
            exports_33("isNumber", isNumber = (a) => typeof a === "number");
        }
    };
});
System.register("source/app/functions/isString", [], function (exports_34, context_34) {
    "use strict";
    var isString;
    var __moduleName = context_34 && context_34.id;
    return {
        setters: [],
        execute: function () {
            exports_34("isString", isString = (a) => typeof a === "string");
        }
    };
});
System.register("source/app/functions/join", [], function (exports_35, context_35) {
    "use strict";
    var join;
    var __moduleName = context_35 && context_35.id;
    return {
        setters: [],
        execute: function () {
            exports_35("join", join = (a) => (bs) => bs.join(a));
        }
    };
});
System.register("source/app/functions/last", [], function (exports_36, context_36) {
    "use strict";
    var last;
    var __moduleName = context_36 && context_36.id;
    return {
        setters: [],
        execute: function () {
            exports_36("last", last = (as) => as[as.length - 1]);
        }
    };
});
System.register("source/app/functions/log", [], function (exports_37, context_37) {
    "use strict";
    var log;
    var __moduleName = context_37 && context_37.id;
    return {
        setters: [],
        execute: function () {
            exports_37("log", log = (s) => (a) => {
                console.groupCollapsed(s);
                console.log(a);
                console.groupEnd();
                return a;
            });
        }
    };
});
System.register("source/app/functions/map", [], function (exports_38, context_38) {
    "use strict";
    var map, mapV;
    var __moduleName = context_38 && context_38.id;
    return {
        setters: [],
        execute: function () {
            exports_38("map", map = (ab) => (as) => as.map(ab));
            exports_38("mapV", mapV = (ab) => (...as) => as.map(ab));
        }
    };
});
System.register("source/app/functions/merge", [], function (exports_39, context_39) {
    "use strict";
    var merge;
    var __moduleName = context_39 && context_39.id;
    return {
        setters: [],
        execute: function () {
            exports_39("merge", merge = (a) => (b) => Object.assign({}, a, b));
        }
    };
});
System.register("source/app/functions/not", [], function (exports_40, context_40) {
    "use strict";
    var not;
    var __moduleName = context_40 && context_40.id;
    return {
        setters: [],
        execute: function () {
            exports_40("not", not = (a) => !a);
        }
    };
});
System.register("source/app/functions/partial", [], function (exports_41, context_41) {
    "use strict";
    var partial;
    var __moduleName = context_41 && context_41.id;
    return {
        setters: [],
        execute: function () {
            exports_41("partial", partial = (...as) => (f) => (...bs) => f(...as, ...bs));
        }
    };
});
System.register("source/app/functions/pipe", [], function (exports_42, context_42) {
    "use strict";
    var fluent, next, pipe;
    var __moduleName = context_42 && context_42.id;
    return {
        setters: [],
        execute: function () {
            fluent = (f) => {
                function invoke(a) {
                    return f(a);
                }
                const p = Object.assign(invoke.bind(null), {
                    then: (f) => {
                        return next(p, f);
                    },
                    invoke,
                });
                return p;
            };
            next = (prev, f) => {
                function invoke(a) {
                    return f(prev(a));
                }
                const p = Object.assign(invoke.bind(null), {
                    then: (f) => {
                        return next(p, f);
                    },
                    invoke,
                });
                return p;
            };
            exports_42("pipe", pipe = Object.assign((...fs) => {
                return (a) => fs.reduce((v, f) => f(v), a);
            }, { fluent }));
        }
    };
});
System.register("source/app/functions/pipeV", [], function (exports_43, context_43) {
    "use strict";
    var pipeV;
    var __moduleName = context_43 && context_43.id;
    return {
        setters: [],
        execute: function () {
            exports_43("pipeV", pipeV = (...as) => (f, ...fs) => fs.reduce((a, f) => f(a), f(...as)));
        }
    };
});
System.register("source/app/functions/prop", [], function (exports_44, context_44) {
    "use strict";
    var prop;
    var __moduleName = context_44 && context_44.id;
    return {
        setters: [],
        execute: function () {
            exports_44("prop", prop = (k) => (a) => a[k]);
        }
    };
});
System.register("source/app/functions/reduce", [], function (exports_45, context_45) {
    "use strict";
    var reduce, reduceV;
    var __moduleName = context_45 && context_45.id;
    return {
        setters: [],
        execute: function () {
            exports_45("reduce", reduce = (r) => (b) => (as) => as.reduce(r, b));
            exports_45("reduceV", reduceV = (r) => (b) => (...as) => as.reduce(r, b));
        }
    };
});
System.register("source/app/functions/reduceRight", [], function (exports_46, context_46) {
    "use strict";
    var reduceRight;
    var __moduleName = context_46 && context_46.id;
    return {
        setters: [],
        execute: function () {
            exports_46("reduceRight", reduceRight = (reducer) => (a) => (bs) => (bs.length > 0 ? bs.reduceRight(reducer, a) : a));
        }
    };
});
System.register("source/app/functions/replace", [], function (exports_47, context_47) {
    "use strict";
    var replace;
    var __moduleName = context_47 && context_47.id;
    return {
        setters: [],
        execute: function () {
            exports_47("replace", replace = (searchValue) => (replaceValue) => (within) => within.replace(searchValue, replaceValue));
        }
    };
});
System.register("source/app/functions/reverse", [], function (exports_48, context_48) {
    "use strict";
    var reverse;
    var __moduleName = context_48 && context_48.id;
    return {
        setters: [],
        execute: function () {
            exports_48("reverse", reverse = (as) => Array.from(as).reverse());
        }
    };
});
System.register("source/app/functions/slice", [], function (exports_49, context_49) {
    "use strict";
    var slice;
    var __moduleName = context_49 && context_49.id;
    return {
        setters: [],
        execute: function () {
            exports_49("slice", slice = (n) => (m) => (as) => Array.from(as).slice(n, m));
        }
    };
});
System.register("source/app/functions/sort", [], function (exports_50, context_50) {
    "use strict";
    var sort;
    var __moduleName = context_50 && context_50.id;
    return {
        setters: [],
        execute: function () {
            exports_50("sort", sort = (compare) => (as) => Array.from(as).sort(compare));
        }
    };
});
System.register("source/app/functions/split", [], function (exports_51, context_51) {
    "use strict";
    var split;
    var __moduleName = context_51 && context_51.id;
    return {
        setters: [],
        execute: function () {
            exports_51("split", split = (separator, limit) => (source) => separator == undefined
                ? [source]
                : separator === ""
                    ? Array.from(source).slice(0, limit)
                    : source.split(separator, limit));
        }
    };
});
System.register("source/app/functions/T", [], function (exports_52, context_52) {
    "use strict";
    var T;
    var __moduleName = context_52 && context_52.id;
    return {
        setters: [],
        execute: function () {
            exports_52("T", T = (...ignored) => true);
        }
    };
});
System.register("source/app/functions/tail", [], function (exports_53, context_53) {
    "use strict";
    var tail;
    var __moduleName = context_53 && context_53.id;
    return {
        setters: [],
        execute: function () {
            exports_53("tail", tail = ([, ...as]) => as);
        }
    };
});
System.register("source/app/functions/take", [], function (exports_54, context_54) {
    "use strict";
    var take;
    var __moduleName = context_54 && context_54.id;
    return {
        setters: [],
        execute: function () {
            exports_54("take", take = (n) => (as) => as.slice(0, n));
        }
    };
});
System.register("source/app/functions/tap", [], function (exports_55, context_55) {
    "use strict";
    var tap;
    var __moduleName = context_55 && context_55.id;
    return {
        setters: [],
        execute: function () {
            exports_55("tap", tap = (f) => (a) => {
                f(a);
                return a;
            });
        }
    };
});
System.register("source/app/functions/toArray", [], function (exports_56, context_56) {
    "use strict";
    var toArray;
    var __moduleName = context_56 && context_56.id;
    return {
        setters: [],
        execute: function () {
            exports_56("toArray", toArray = (as) => Array.from(as));
        }
    };
});
System.register("source/app/functions/toString", [], function (exports_57, context_57) {
    "use strict";
    var toString;
    var __moduleName = context_57 && context_57.id;
    return {
        setters: [],
        execute: function () {
            exports_57("toString", toString = (a) => `${a}`);
        }
    };
});
System.register("source/app/functions/toUnary", [], function (exports_58, context_58) {
    "use strict";
    var __moduleName = context_58 && context_58.id;
    function toUnary(v) {
        return (as) => v(...as);
    }
    exports_58("toUnary", toUnary);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("source/app/functions/toVariadic", [], function (exports_59, context_59) {
    "use strict";
    var toVariadic;
    var __moduleName = context_59 && context_59.id;
    return {
        setters: [],
        execute: function () {
            exports_59("toVariadic", toVariadic = (u) => (...as) => u(as));
        }
    };
});
System.register("source/app/functions/trim", [], function (exports_60, context_60) {
    "use strict";
    var trim;
    var __moduleName = context_60 && context_60.id;
    return {
        setters: [],
        execute: function () {
            exports_60("trim", trim = (s) => s.trim());
        }
    };
});
System.register("source/app/functions/uncurry", [], function (exports_61, context_61) {
    "use strict";
    var applyArgument, uncurry;
    var __moduleName = context_61 && context_61.id;
    return {
        setters: [],
        execute: function () {
            applyArgument = (currentStep, a) => currentStep(a);
            exports_61("uncurry", uncurry = (length) => (curried) => (...allArguments) => {
                const expectedArguments = allArguments.slice(0, length);
                return expectedArguments.reduce(applyArgument, curried);
            });
        }
    };
});
System.register("source/app/functions/unless", [], function (exports_62, context_62) {
    "use strict";
    var unless;
    var __moduleName = context_62 && context_62.id;
    return {
        setters: [],
        execute: function () {
            exports_62("unless", unless = (p) => (mapXB) => (a) => (p(a) ? a : mapXB(a)));
        }
    };
});
System.register("source/app/functions", ["source/app/functions/always", "source/app/functions/assoc", "source/app/functions/bind", "source/app/functions/blackbird", "source/app/functions/both", "source/app/functions/cap", "source/app/functions/clone", "source/app/functions/complement", "source/app/functions/compose", "source/app/functions/concat", "source/app/functions/curry", "source/app/functions/curryN", "source/app/functions/defaultTo", "source/app/functions/either", "source/app/functions/equals", "source/app/functions/F", "source/app/functions/filter", "source/app/functions/has", "source/app/functions/head", "source/app/functions/identity", "source/app/functions/ifElse", "source/app/functions/iife", "source/app/functions/init", "source/app/functions/invoker", "source/app/functions/isArray", "source/app/functions/isDate", "source/app/functions/isDefined", "source/app/functions/isEmpty", "source/app/functions/isFunction", "source/app/functions/isNaN", "source/app/functions/isNil", "source/app/functions/isNumber", "source/app/functions/isObject", "source/app/functions/isString", "source/app/functions/join", "source/app/functions/last", "source/app/functions/log", "source/app/functions/map", "source/app/functions/merge", "source/app/functions/not", "source/app/functions/partial", "source/app/functions/pipe", "source/app/functions/pipeV", "source/app/functions/prop", "source/app/functions/reduce", "source/app/functions/reduceRight", "source/app/functions/replace", "source/app/functions/reverse", "source/app/functions/slice", "source/app/functions/sort", "source/app/functions/split", "source/app/functions/T", "source/app/functions/tail", "source/app/functions/take", "source/app/functions/tap", "source/app/functions/toArray", "source/app/functions/toString", "source/app/functions/toUnary", "source/app/functions/toVariadic", "source/app/functions/trim", "source/app/functions/uncurry", "source/app/functions/unless"], function (exports_63, context_63) {
    "use strict";
    var __moduleName = context_63 && context_63.id;
    return {
        setters: [
            function (always_ts_1_1) {
                exports_63({
                    "always": always_ts_1_1["always"]
                });
            },
            function (assoc_ts_1_1) {
                exports_63({
                    "assoc": assoc_ts_1_1["assoc"]
                });
            },
            function (bind_ts_1_1) {
                exports_63({
                    "bind": bind_ts_1_1["bind"]
                });
            },
            function (blackbird_ts_1_1) {
                exports_63({
                    "blackbird": blackbird_ts_1_1["blackbird"]
                });
            },
            function (both_ts_1_1) {
                exports_63({
                    "both": both_ts_1_1["both"]
                });
            },
            function (cap_ts_1_1) {
                exports_63({
                    "cap": cap_ts_1_1["cap"]
                });
            },
            function (clone_ts_2_1) {
                exports_63({
                    "clone": clone_ts_2_1["clone"]
                });
            },
            function (complement_ts_1_1) {
                exports_63({
                    "complement": complement_ts_1_1["complement"]
                });
            },
            function (compose_ts_1_1) {
                exports_63({
                    "compose": compose_ts_1_1["compose"]
                });
            },
            function (concat_ts_1_1) {
                exports_63({
                    "concat": concat_ts_1_1["concat"]
                });
            },
            function (curry_ts_1_1) {
                exports_63({
                    "curry": curry_ts_1_1["curry"]
                });
            },
            function (curryN_ts_2_1) {
                exports_63({
                    "curryN": curryN_ts_2_1["curryN"]
                });
            },
            function (defaultTo_ts_1_1) {
                exports_63({
                    "defaultTo": defaultTo_ts_1_1["defaultTo"]
                });
            },
            function (either_ts_1_1) {
                exports_63({
                    "either": either_ts_1_1["either"]
                });
            },
            function (equals_ts_1_1) {
                exports_63({
                    "equals": equals_ts_1_1["equals"]
                });
            },
            function (F_ts_1_1) {
                exports_63({
                    "F": F_ts_1_1["F"]
                });
            },
            function (filter_ts_1_1) {
                exports_63({
                    "filter": filter_ts_1_1["filter"]
                });
            },
            function (has_ts_1_1) {
                exports_63({
                    "has": has_ts_1_1["has"]
                });
            },
            function (head_ts_1_1) {
                exports_63({
                    "head": head_ts_1_1["head"]
                });
            },
            function (identity_ts_1_1) {
                exports_63({
                    "identity": identity_ts_1_1["identity"]
                });
            },
            function (ifElse_ts_1_1) {
                exports_63({
                    "ifElse": ifElse_ts_1_1["ifElse"]
                });
            },
            function (iife_ts_1_1) {
                exports_63({
                    "iife": iife_ts_1_1["iife"]
                });
            },
            function (init_ts_1_1) {
                exports_63({
                    "init": init_ts_1_1["init"]
                });
            },
            function (invoker_ts_1_1) {
                exports_63({
                    "invoker": invoker_ts_1_1["invoker"]
                });
            },
            function (isArray_ts_2_1) {
                exports_63({
                    "isArray": isArray_ts_2_1["isArray"]
                });
            },
            function (isDate_ts_2_1) {
                exports_63({
                    "isDate": isDate_ts_2_1["isDate"]
                });
            },
            function (isDefined_ts_3_1) {
                exports_63({
                    "isDefined": isDefined_ts_3_1["isDefined"]
                });
            },
            function (isEmpty_ts_1_1) {
                exports_63({
                    "isEmpty": isEmpty_ts_1_1["isEmpty"]
                });
            },
            function (isFunction_ts_1_1) {
                exports_63({
                    "isFunction": isFunction_ts_1_1["isFunction"]
                });
            },
            function (isNaN_ts_2_1) {
                exports_63({
                    "isNaN": isNaN_ts_2_1["isNaN"]
                });
            },
            function (isNil_ts_1_1) {
                exports_63({
                    "isNil": isNil_ts_1_1["isNil"]
                });
            },
            function (isNumber_ts_1_1) {
                exports_63({
                    "isNumber": isNumber_ts_1_1["isNumber"]
                });
            },
            function (isObject_ts_2_1) {
                exports_63({
                    "isObject": isObject_ts_2_1["isObject"]
                });
            },
            function (isString_ts_1_1) {
                exports_63({
                    "isString": isString_ts_1_1["isString"]
                });
            },
            function (join_ts_1_1) {
                exports_63({
                    "join": join_ts_1_1["join"]
                });
            },
            function (last_ts_1_1) {
                exports_63({
                    "last": last_ts_1_1["last"]
                });
            },
            function (log_ts_1_1) {
                exports_63({
                    "log": log_ts_1_1["log"]
                });
            },
            function (map_ts_1_1) {
                exports_63({
                    "map": map_ts_1_1["map"]
                });
            },
            function (merge_ts_1_1) {
                exports_63({
                    "merge": merge_ts_1_1["merge"]
                });
            },
            function (not_ts_1_1) {
                exports_63({
                    "not": not_ts_1_1["not"]
                });
            },
            function (partial_ts_1_1) {
                exports_63({
                    "partial": partial_ts_1_1["partial"]
                });
            },
            function (pipe_ts_1_1) {
                exports_63({
                    "pipe": pipe_ts_1_1["pipe"]
                });
            },
            function (pipeV_ts_1_1) {
                exports_63({
                    "pipeV": pipeV_ts_1_1["pipeV"]
                });
            },
            function (prop_ts_1_1) {
                exports_63({
                    "prop": prop_ts_1_1["prop"]
                });
            },
            function (reduce_ts_1_1) {
                exports_63({
                    "reduce": reduce_ts_1_1["reduce"]
                });
            },
            function (reduceRight_ts_1_1) {
                exports_63({
                    "reduceRight": reduceRight_ts_1_1["reduceRight"]
                });
            },
            function (replace_ts_1_1) {
                exports_63({
                    "replace": replace_ts_1_1["replace"]
                });
            },
            function (reverse_ts_1_1) {
                exports_63({
                    "reverse": reverse_ts_1_1["reverse"]
                });
            },
            function (slice_ts_1_1) {
                exports_63({
                    "slice": slice_ts_1_1["slice"]
                });
            },
            function (sort_ts_1_1) {
                exports_63({
                    "sort": sort_ts_1_1["sort"]
                });
            },
            function (split_ts_1_1) {
                exports_63({
                    "split": split_ts_1_1["split"]
                });
            },
            function (T_ts_1_1) {
                exports_63({
                    "T": T_ts_1_1["T"]
                });
            },
            function (tail_ts_1_1) {
                exports_63({
                    "tail": tail_ts_1_1["tail"]
                });
            },
            function (take_ts_1_1) {
                exports_63({
                    "take": take_ts_1_1["take"]
                });
            },
            function (tap_ts_1_1) {
                exports_63({
                    "tap": tap_ts_1_1["tap"]
                });
            },
            function (toArray_ts_1_1) {
                exports_63({
                    "toArray": toArray_ts_1_1["toArray"]
                });
            },
            function (toString_ts_1_1) {
                exports_63({
                    "toString": toString_ts_1_1["toString"]
                });
            },
            function (toUnary_ts_1_1) {
                exports_63({
                    "toUnary": toUnary_ts_1_1["toUnary"]
                });
            },
            function (toVariadic_ts_1_1) {
                exports_63({
                    "toVariadic": toVariadic_ts_1_1["toVariadic"]
                });
            },
            function (trim_ts_1_1) {
                exports_63({
                    "trim": trim_ts_1_1["trim"]
                });
            },
            function (uncurry_ts_1_1) {
                exports_63({
                    "uncurry": uncurry_ts_1_1["uncurry"]
                });
            },
            function (unless_ts_1_1) {
                exports_63({
                    "unless": unless_ts_1_1["unless"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("module", ["source/app/functions"], function (exports_64, context_64) {
    "use strict";
    var __moduleName = context_64 && context_64.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_64(exports);
    }
    return {
        setters: [
            function (functions_ts_1_1) {
                exportStar_1(functions_ts_1_1);
            }
        ],
        execute: function () {
        }
    };
});

const __exp = __instantiate("module", false);
export const always = __exp["always"];
export const assoc = __exp["assoc"];
export const bind = __exp["bind"];
export const blackbird = __exp["blackbird"];
export const both = __exp["both"];
export const cap = __exp["cap"];
export const clone = __exp["clone"];
export const complement = __exp["complement"];
export const compose = __exp["compose"];
export const concat = __exp["concat"];
export const curry = __exp["curry"];
export const curryN = __exp["curryN"];
export const defaultTo = __exp["defaultTo"];
export const either = __exp["either"];
export const equals = __exp["equals"];
export const F = __exp["F"];
export const filter = __exp["filter"];
export const has = __exp["has"];
export const head = __exp["head"];
export const identity = __exp["identity"];
export const ifElse = __exp["ifElse"];
export const iife = __exp["iife"];
export const init = __exp["init"];
export const invoker = __exp["invoker"];
export const isArray = __exp["isArray"];
export const isDate = __exp["isDate"];
export const isDefined = __exp["isDefined"];
export const isEmpty = __exp["isEmpty"];
export const isFunction = __exp["isFunction"];
export const isNaN = __exp["isNaN"];
export const isNil = __exp["isNil"];
export const isNumber = __exp["isNumber"];
export const isObject = __exp["isObject"];
export const isString = __exp["isString"];
export const join = __exp["join"];
export const last = __exp["last"];
export const log = __exp["log"];
export const map = __exp["map"];
export const merge = __exp["merge"];
export const not = __exp["not"];
export const partial = __exp["partial"];
export const pipe = __exp["pipe"];
export const pipeV = __exp["pipeV"];
export const prop = __exp["prop"];
export const reduce = __exp["reduce"];
export const reduceRight = __exp["reduceRight"];
export const replace = __exp["replace"];
export const reverse = __exp["reverse"];
export const slice = __exp["slice"];
export const sort = __exp["sort"];
export const split = __exp["split"];
export const T = __exp["T"];
export const tail = __exp["tail"];
export const take = __exp["take"];
export const tap = __exp["tap"];
export const toArray = __exp["toArray"];
export const toString = __exp["toString"];
export const toUnary = __exp["toUnary"];
export const toVariadic = __exp["toVariadic"];
export const trim = __exp["trim"];
export const uncurry = __exp["uncurry"];
export const unless = __exp["unless"];

