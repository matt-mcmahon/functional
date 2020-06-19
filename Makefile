export DENO_DIR=./.deno
MAIN=./source/index.test.js
BUNDLE_FILE=./dist/main.mjs
BUNDLE_TEST_FILE=./dist/main.test.mjs
LOCK=--lock ./lock-file.json
IMPORT_MAP=--unstable --importmap ./import-map.json

run: test

build: quicktest cache
	echo "// deno-fmt-ignore-file" > ${BUNDLE_FILE}
	echo "// @ts-nocheck" >> ${BUNDLE_FILE}
	echo "/* eslint-disable */" >> ${BUNDLE_FILE}
	deno bundle ${MAIN} >> ${BUNDLE_FILE}
	node ${BUNDLE_TEST_FILE} 1> /dev/null

cache:
	deno cache --reload ${LOCK} ${IMPORT_MAP} ${MAIN}

clean:
	rm -rf ${BUNDLE_FILE} ${IMPORT_MAP} ${DENO_DIR}/gen

format:
	deno fmt ./source

lint:
	deno fmt --check ./source
	deno lint --unstable ./source

quicktest:
	deno fmt --quiet --check ./source
	deno test ${IMPORT_MAP} --failfast --quiet ./source

test:
	deno test ${IMPORT_MAP} ${LOCK} --cached-only ./source

testnode:
	node ${BUNDLE_TEST_FILE}

install:
	deno cache --reload ${LOCK} --lock-write ${IMPORT_MAP} ${MAIN}

.PHONY: run build cache clean format lint quicktest test testnode install
