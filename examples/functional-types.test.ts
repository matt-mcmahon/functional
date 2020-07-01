import {
  Head,
  Tail,
  HasTail,
  ObjectInfer,
  FunctionInfer,
  ClassInfer,
  ArrayInfer,
  TupleInfer,
  Last,
  Length,
  Prepend,
  Drop,
  Cast,
  Pos,
  Next,
  Prev,
  Iterator,
  Reverse,
  Concat,
  Append,
} from "./functional-types"
import { Test } from "./type-asserts"

declare function fn00(name: string, age: number, single: boolean): true

const test10: Test<
  Head<Parameters<typeof fn00>>, //
  string
> = "PASS"

const test11: Test<
  Tail<[1, 2, string, number]>, //
  [2, string, number]
> = "PASS"

const test12: Test<
  Tail<Parameters<typeof fn00>>, //
  [number, boolean]
> = "PASS"

const test13: Test<
  Tail<Tail<Parameters<typeof fn00>>>, //
  [boolean]
> = "PASS"

const test14: Test<
  HasTail<[1, 2, string]>, //
  true
> = "PASS"

const test15: Test<
  HasTail<Tail<[1, 2, string]>>, //
  true
> = "PASS"

const test16: Test<
  HasTail<Tail<Tail<[1, 2, string]>>>, //
  false
> = "PASS"

const test17: Test<
  ObjectInfer<{ a: string }>, //
  string
> = "PASS"

const test18: Test<
  ObjectInfer<string>, //
  never
> = "PASS"

const test19: Test<
  FunctionInfer<typeof fn00>, //
  [[string, number, boolean], true]
> = "PASS"

const test20: Test<
  ClassInfer<Promise<string>>, //
  string
> = "PASS"

const test21: Test<
  ArrayInfer<[number, string, number, string]>, //
  string | number
> = "PASS"

const test22: Test<
  TupleInfer<[string, number, boolean]>,
  [string, [number, boolean]]
> = "PASS"

const test29: Test<
  Last<[1, 2, 3, 4]>, //
  4
> = "PASS"

const test30: Test<
  Length<[]>, //
  0
> = "PASS"

const test31: Test<
  Length<[any, any]>, //
  2
> = "PASS"

const test32: Test<
  Length<[any, any, any]>, //
  3
> = "PASS"

const test33: Test<
  Length<["a", 1, null, string]>, //
  4
> = "PASS"

const test46: Test<
  Length<[string, number, boolean, ...string[]]>, //
  number
> = "PASS"

const test34: Test<
  Prepend<string, []>, //
  [string]
> = "PASS"

const test35: Test<
  Prepend<number, [1, 2]>, //
  [number, 1, 2]
> = "PASS"

const test37: Test<
  Length<[number, 1, 2]>, //
  3
> = "PASS"

const test38: Test<
  Length<Prepend<any, [any, any, any]>>, //
  4
> = "PASS"

const test39: Test<
  Drop<2, [0, 1, 2, 3]>, //
  [2, 3]
> = "PASS"

const test40a: Test<
  Drop<Length<[2, 3]>, [0]>, //
  never
> = "PASS"

const test40b: Test<
  Drop<4, []>, //
  never
> = "PASS"

const test40c: Test<
  Drop<Length<[string, number]>, [string, number, boolean, string[]]>,
  [boolean, string[]]
> = "PASS"

const test41: Test<
  Cast<[string], any>, //
  [string]
> = "PASS"

const test42: Test<
  Cast<[string], number>, //
  number
> = "PASS"

const test50: Test<
  Pos<[any, any]>, //
  2
> = "PASS"

const test51: Test<
  Pos<Next<[any, any]>>, //
  3
> = "PASS"

const test52: Test<
  Pos<Prev<[any, any]>>, //
  1
> = "PASS"

const test53: Test<
  Iterator<2>,
  [
    any, //
    any
  ]
> = "PASS"

const test54: Test<
  Iterator<3, Iterator<2>>, //
  [any, any, any, any, any]
> = "PASS"

const test55: Test<
  Pos<Iterator<2>>, //
  2
> = "PASS"

const test56: Test<
  Pos<Iterator<3, Iterator<2>>>, //
  5
> = "PASS"

const test57: Test<
  Reverse<[1, 2, 3]>, //
  [3, 2, 1]
> = "PASS"

const test58: Test<
  Reverse<Reverse<[1, 2, 3]>>, //
  [1, 2, 3]
> = "PASS"

const test59: Test<
  Reverse<[2, 1], [3, 4]>, //
  [1, 2, 3, 4]
> = "PASS"

const test60: Test<
  Concat<[1, 2], [3, 4]>, //
  [1, 2, 3, 4]
> = "PASS"

const test61: Test<
  Append<3, [1, 2]>, //
  [1, 2, 3]
> = "PASS"
