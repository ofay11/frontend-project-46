install:
	npm	ci

gendiff:
	node bin/gendiff.js

test:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

test2:
	node bin/gendiff.js '/mnt/c/Users/itimu/file1.json' '/mnt/c/Users/itimu/file2.json'

testg:
	gendiff '/mnt/c/Users/itimu/file1.json' '/mnt/c/Users/itimu/file2.json'

publish:
	npm publish --dry-run

lint:
	npx eslint .