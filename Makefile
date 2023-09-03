install:
	npm	ci

gendiff:
	node bin/gendiff.js

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-watch:
	npm test -s -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8

publish:
	npm publish --dry-run

lint:
	npx eslint .