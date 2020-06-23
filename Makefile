# Include invironment varialbes in .env file and immediately export those 
# variables for each target
include .env
export

MAIN=./source/index.test.ts
BUNDLE_FILE=./dist/index.mjs
LOCK_OPTIONS=--lock ./lock-file.json

ifneq ("$(wildcard ${IMPORT_MAP_PATH})","")
IMPORT_MAP_OPTIONS=--unstable --importmap ${IMPORT_MAP_PATH}
else
IMPORT_MAP_OPTIONS=
endif

run: test

bundle: quicktest cache
	echo "// deno-fmt-ignore-file" > ${BUNDLE_FILE}
	echo "// @ts-nocheck" >> ${BUNDLE_FILE}
	echo "/* eslint-disable */" >> ${BUNDLE_FILE}
	deno bundle ${IMPORT_MAP_OPTIONS} ${MAIN} >> ${BUNDLE_FILE}
ifneq ("$(wildcard ${BUNDLE_TEST_FILE})","")
	node ${BUNDLE_TEST_FILE} 1> /dev/null; 
else
	$(warning BUNDLE_TEST_FILE is not defined)
endif


cache:
	deno cache --reload ${LOCK_OPTIONS} ${IMPORT_MAP_OPTIONS} ${MAIN}

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
	deno test ${IMPORT_MAP_OPTIONS} --failfast --quiet ./source

test:
	deno test ${IMPORT_MAP_OPTIONS} ${LOCK_OPTIONS} --cached-only ./source

testnode:
	node ${BUNDLE_TEST_FILE}

update-lock-file:
	deno cache --reload ${LOCK_OPTIONS} --lock-write ${IMPORT_MAP_OPTIONS} ${MAIN}

install:
ifndef LOCAL_SIGN_MODULE_PATH
	$(error LOCAL_SIGN_MODULE_PATH is undefined)
else
	unlink ./lib/sign
	ln -sfr $(LOCAL_SIGN_MODULE_PATH) ./lib/sign
endif
	deno cache --reload ${LOCK_OPTIONS} ${IMPORT_MAP_OPTIONS} ${MAIN}

.PHONY: run build cache clean format lint quicktest test testnode install
