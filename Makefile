build: lint test
	deno run -A scripts/build-npm.ts

test:
	deno test -A

lint:
	deno lint --ignore=npm
