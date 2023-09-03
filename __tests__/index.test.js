import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import buildDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);

describe.each([['stylish']])(
  '%s formatter',
  (formatter) => {
    const filepathOfExpected = getFixturePath(`result-${formatter}.txt`);
    const expected = fs.readFileSync(filepathOfExpected, 'utf-8');

    test.each([['json'], ['yml']])('%s files', (extension) => {
      const filepath1 = getFixturePath(`before.${extension}`);
      const filepath2 = getFixturePath(`after.${extension}`);

      const result = buildDiff(filepath1, filepath2, formatter);

      expect(result).toBe(expected);
    });
  }
);
