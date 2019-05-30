import test from "tape"
import { inspect } from "./util/index.js"
import {
  reduceRight as namedExport,
  default as reduceRight,
} from "./reduceRight.js"
import { reduceRight as indexExport } from "./index"

test("reduceRight module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof reduceRight
    const message = inspect`typeof reduceRight
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = reduceRight === namedExport && reduceRight === indexExport
    const message = inspect`Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof reduceRight.signature
    const message = inspect`typeof reduceRight.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("reduceRight module: implementation", assert => {
  {
    const add = (x, y) => x + y
    const expected = 9
    const actual = reduceRight(add)(0)([1, 3, 5])
    const message = inspect`reducing [1, 3, 5]
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  const a = "a"
  const b = "b"
  const c = "c"
  const concat = (x = "", y = "") => x + y

  {
    const expected = "acb"
    const actual = reduceRight(concat)(a)([b, c])
    const message = inspect`reducing 'a', ['b', 'c']
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "a"
    const actual = reduceRight(concat)(a)([])
    const message = inspect`reducing 'a', []
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  const thrower = () => {
    throw Error("I should not be called")
  }

  {
    const accumulator = "original accumulator"
    const expected = accumulator
    const actual = reduceRight(thrower)(accumulator)([])
    const message = inspect`reducing an empty array should yield the original accumulator`
    assert.strictEqual(actual, expected, message)
  }

  {
    const accumulator = "original accumulator"
    const expected = accumulator
    const actual = reduceRight(thrower)(accumulator)(456)
    const message = inspect`reducing number should yield the original accumulator`
    assert.strictEqual(actual, expected, message)
  }

  {
    const accumulator = "original accumulator"
    const expected = accumulator
    const actual = reduceRight(thrower)(accumulator)({ value: "not reducable" })
    const message = inspect`reducing object should yield the original accumulator`
    assert.strictEqual(actual, expected, message)
  }

  assert.end()
})
