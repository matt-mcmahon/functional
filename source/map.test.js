import test from "tape"
import { inspect } from "./util/index.js"
import { map as namedExport, default as map } from "./map.js"
import { map as indexExport } from "./index"

test("map module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof map
    const message = inspect`typeof map
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = map === namedExport && map === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof map.signature
    const message = inspect`typeof map.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("map module: implementation", assert => {
  const as = [1, 2, 3]
  const bs = ["1", "2", "3"]
  const fun = a => a.toString()

  {
    const actual = map(fun)(as)
    const expected = bs
    const message = "Numbers should be mapped to strings"
    assert.deepEqual(actual, expected, message)
  }

  {
    const actual = map(fun)([])
    const expected = []
    const message = "Should work with an empty mappable."
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
