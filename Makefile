# Include invironment varialbes in .env file and immediately export those 
# variables for each target
include .env
export

MAIN=./source/index.test.js
BUNDLE_FILE=./dist/index.mjs
BUNDLE_TEST_FILE=./dist/index.test.mjs
LOCK=--lock ./lock-file.json

ifneq ("$(wildcard ./import-map.json)","")
IMPORT_MAP=--unstable --importmap ./import-map.json
else
IMPORT_MAP=
endif

run: test

build: # quicktest cache
	echo "// deno-fmt-ignore-file" > ${BUNDLE_FILE}
	echo "// @ts-nocheck" >> ${BUNDLE_FILE}
	echo "/* eslint-disable */" >> ${BUNDLE_FILE}
	deno bundle ${IMPORT_MAP} ${MAIN} >> ${BUNDLE_FILE}
ifneq ("$(wildcard ${BUNDLE_TEST_FILE})","")
	node ${BUNDLE_TEST_FILE} 1> /dev/null; 
endif

cache:
	deno cache --reload ${LOCK} ${IMPORT_MAP} ${MAIN}

clean:
	rm -f ./lib/sign
	rm -rf ${BUNDLE_FILE} ${DENO_DIR}/gen

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

update-lock-file:
	deno cache --reload ${LOCK} --lock-write ${IMPORT_MAP} ${MAIN}

install:
ifndef SIGN_MODULE_LOCAL_PATH
	$(error SIGN_MODULE_LOCAL_PATH is undefined)
endif
	ln -sfr $(SIGN_MODULE_LOCAL_PATH) ./lib/sign
	deno cache --reload ${LOCK} ${IMPORT_MAP} ${MAIN}

.PHONY: run build cache clean format lint quicktest test testnode install
