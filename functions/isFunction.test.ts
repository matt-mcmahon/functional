import { assert } from "testing";
import { isFunction } from "./isFunction.ts";

Deno.test("isFunction", async (t) => {
  await t.step(`normal function`, () => {
    function test() {
      "do nothing";
    }
    assert(isFunction(test));
  });

  await t.step(`generator function`, () => {
    function* test() {
      yield;
    }
    assert(isFunction(test));
  });

  await t.step(`async function`, () => {
    async function test() {
      return await Promise.resolve("do nothing");
    }
    assert(isFunction(test));
  });

  await t.step(`arrow function`, () => {
    const test = () => {
      "do nothing";
    };
    assert(isFunction(test));
  });
});
