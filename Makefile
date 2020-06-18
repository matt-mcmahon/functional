export DENO_DIR=./.deno
MAIN=lib/describe.ts
BUNDLE_FILE=./dist/main.mjs
BUNDLE_TEST_FILE=./dist/main.test.mjs
LOCK=--lock ./lock-file.json

run: test

build: quicktest cache
	echo "// deno-fmt-ignore-file" > ${BUNDLE_FILE}
	echo "// @ts-nocheck" >> ${BUNDLE_FILE}
	echo "/* eslint-disable */" >> ${BUNDLE_FILE}
	deno bundle ${MAIN} >> ${BUNDLE_FILE}
	node ${BUNDLE_TEST_FILE} 1> /dev/null

cache:
	deno cache --reload ${LOCK} ${MAIN}

clean:
	rm -rf ${BUNDLE_FILE} ${DENO_DIR}/gen

format:
	deno fmt ./source

lint:
	deno fmt --check ./source
	deno lint --unstable ./source

quicktest:
	deno fmt --quiet --check ./source
	deno test --failfast --quiet ./source

test: lint
	deno test ${LOCK} --cached-only ./source

testnode:
	node ${BUNDLE_TEST_FILE}

upgrade:
	deno cache --reload --lock-write ${LOCK} ${MAIN}

.PHONY: run build cache clean format lint quicktest test testnode upgrade
