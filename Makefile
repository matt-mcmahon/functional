# Include, then immediately export, environment variables in .env file.
# These variables will be available to the Deno CLI.
include .env
export

# These settings can be safely disabled by setting the VARIABLE_NAME to nothing
# in your deployment's .env file. For example, setting the following would
# disable the local Deno cache in favor of Deno's global cache:
#
# DENO_DIR=
#
CACHE_OPTIONS                ?= --cached-only
DENO_DIR                     ?= .deno
IMPORT_MAP_FILE              ?=
LOCK_FILE                    ?= lock-file.json
RUN_PERMISSIONS              ?=
TEST_PERMISSIONS             ?= --allow-read=./source
USE_UNSTABLE                 ?=

# The default values for these settings are meant to be easily overwritten by
# your project's .env file.
#
# Do NOT set these values to nothing.
#
DENO_BUNDLE_FILE             ?= ./bundle.js
DENO_MAIN                    ?= ./module.ts
DENO_SOURCE_DIR              ?= ./source
TARGET_NODE                  ?= ./target/node

DENO_APP_DIR                 ?= ${DENO_SOURCE_DIR}/app
DENO_LIB_DIR                 ?= ${DENO_SOURCE_DIR}/lib
DENO_DEPENDENCIES_FILE       ?= ${DENO_MAIN}

NPM_CMD                      ?= npm
NPM_INSTALL_CMD              ?= ${NPM_CMD} install --silent --prefer-offline
NPM_RUN_CMD                  ?= ${NPM_CMD} run
NPM_LINK_CMD                 ?= ${NPM_CMD} link

NODE_GEN_DIR                 ?= ${TARGET_NODE}/source/gen

ifneq (${IMPORT_MAP_FILE},)
IMPORT_MAP_OPTIONS=--importmap ${IMPORT_MAP_FILE}
USE_UNSTABLE=--unstable
endif

ifneq (${LOCK_FILE},)
LOCK_OPTIONS=--lock ${LOCK_FILE}
LOCK_OPTIONS_WRITE=--lock ${LOCK_FILE} --lock-write
endif

INTEGRATION_TESTS := $(wildcard integration-tests/*/.)

default: lint test deno-build node-build node-test ${INTEGRATION_TESTS}

${LOCK_FILE}:
	@echo "File ${LOCK_FILE} does not exist."
	@read -p "Press [Enter] to update your lock-file and dependencies, or [Ctrl]+[C] to cancel:" cancel
	@deno cache \
		${RUN_PERMISSIONS} \
		${LOCK_OPTIONS_WRITE} \
		${IMPORT_MAP_OPTIONS} ${USE_UNSTABLE} \
		${DENO_DEPENDENCIES_FILE}

build: deno-build node-build

cache:
	@deno cache ${RUN_PERMISSIONS} ${LOCK_OPTIONS} ${IMPORT_MAP_OPTIONS} ${USE_UNSTABLE} \
		${DENO_DEPENDENCIES_FILE}
	@$(shell DENO_DIR=;deno cache \
		${RUN_PERMISSIONS} \
		${LOCK_OPTIONS} \
		${IMPORT_MAP_OPTIONS} ${USE_UNSTABLE} \
		${DENO_DEPENDENCIES_FILE})

clean:
	@rm -rf \
		${DENO_BUNDLE_FILE} \
		${NODE_GEN_DIR}

configure:
	@./configure

deno: deno-build

deno-build:
	@echo "// deno-fmt-ignore-file" > ${DENO_BUNDLE_FILE}
	@echo "// deno-lint-ignore-file" >> ${DENO_BUNDLE_FILE}
	@echo "// @ts-nocheck" >> ${DENO_BUNDLE_FILE}
	@echo "/* eslint-disable */" >> ${DENO_BUNDLE_FILE}
	@deno bundle ${IMPORT_MAP_OPTIONS} ${USE_UNSTABLE} ${DENO_MAIN} >> ${DENO_BUNDLE_FILE}

fmt: format

format:
	@deno fmt ${DENO_SOURCE_DIR} ${DENO_LIB_DIR}

install: ${LOCK_FILE} ${DENO_LIB_DIR}/describe

lint:
	@deno fmt --check --unstable ${DENO_SOURCE_DIR}
	@-deno lint --unstable ${DENO_SOURCE_DIR}

lint-quiet:
	@deno fmt --quiet --check ${DENO_SOURCE_DIR}
	@-deno lint --quiet --unstable ${DENO_SOURCE_DIR}

node: node-build

node-build:
	@echo
	@echo Building for NodeJS/NPM, etc. ...
	@echo ↪ This code is a proof-of-concept and is not recomended for production!
	@echo
	@mkdir -p ${NODE_GEN_DIR}
	@rsync -am --include="*.ts" --delete-during \
		${DENO_APP_DIR}/ \
		${NODE_GEN_DIR}/
	@find ${NODE_GEN_DIR} -type f -name "*.ts" -exec \
		sed -i -E "s/(from \"\..+)\.ts(\";?)/\1\2/g" {} +
	@cd ${TARGET_NODE} \
		&& ${NPM_INSTALL_CMD} \
		&& ${NPM_RUN_CMD} build

node-test: node-build
	cd ${TARGET_NODE} \
		&& ${NPM_RUN_CMD} test

node-clean:
	@cd ${TARGET_NODE} && ${NPM_INSTALL_CMD} && ${NPM_RUN_CMD} clean

node-link:
	@cd ${TARGET_NODE} && ${NPM_LINK_CMD}

node-install:
	@cd ${TARGET_NODE} && ${NPM_INSTALL_CMD}

integration-tests: $(INTEGRATION_TESTS)

run:
	@deno run ${RUN_PERMISSIONS} ${DENO_MAIN}

test: install lint
	@deno test --coverage=coverage --unstable \
		${TEST_PERMISSIONS} ${IMPORT_MAP_OPTIONS} ${LOCK_OPTIONS} ${CACHE_OPTIONS} \
		${DENO_SOURCE_DIR}

test-quiet: install lint-quiet
	@deno test --failfast --quiet \
		${TEST_PERMISSIONS} ${IMPORT_MAP_OPTIONS} ${USE_UNSTABLE} ${LOCK_OPTIONS} ${CACHE_OPTIONS} \
		${DENO_SOURCE_DIR}

test-watch: install
	@while inotifywait -e close_write ${DENO_APP_DIR} ; do make test;	done

$(INTEGRATION_TESTS):
	$(MAKE) -C $@

upgrade:
ifneq (${LOCK_FILE},)
	@read -p "[Enter] to update your lock-file and dependencies or [Ctrl]+[C] to cancel:" cancel
	@deno cache --reload \
		${RUN_PERMISSIONS} ${LOCK_OPTIONS_WRITE} ${IMPORT_MAP_OPTIONS} ${USE_UNSTABLE} \
		${DENO_DEPENDENCIES_FILE}
endif

# Yes, most everything is .PHONY, I don't care 😏
.PHONY: build bundle \
	cache clean configure \
	default deno deno-build \
	fmt format \
	install \
	lint lint-quiet \
	node node-build node-clean node-install node-link node-test \
	run \
	test test-quiet test-watch \
	upgrade \
	$(INTEGRATION_TESTS)
