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

testm:
	node bin/gendiff.js __fixtures__/before.json __fixtures__/after.json

testm2:
	node bin/gendiff.js '/mnt/c/Users/itimu/before.json' '/mnt/c/Users/itimu/after.json'

publish:
	npm publish --dry-run

lint:
	npx eslint .