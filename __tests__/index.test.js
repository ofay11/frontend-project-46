import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf8');

const expectedStylish = readFile('result_stylish.txt');
const expectedPlain = readFile('result_plain.txt');
const expectedJson = readFile('result_json.txt');

const extensions = ['json', 'yml', 'yaml'];

describe('Positives cases', () => {
  test.each(extensions)('Format %s', (extension) => {
    const file1 = `${process.cwd()}/__fixtures__/file1.${extension}`;
    const file2 = `${process.cwd()}/__fixtures__/file2.${extension}`;

    expect(gendiff(file1, file2, 'stylish')).toEqual(expectedStylish);
    expect(gendiff(file1, file2, 'plain')).toEqual(expectedPlain);
    expect(gendiff(file1, file2, 'json')).toEqual(expectedJson);
  });
});

describe('Negative cases', () => {
  test('Check wrong file extension', () => {
    const error = new Error(
      `Invalid file extension: 'txt'! Try supported formats: 'json', 'yml', 'yaml'.\n`
    );

    expect(() => {
      gendiff(
        getFixturePath('file1_wrong.txt'),
        getFixturePath('file2_wrong.txt')
      );
    }).toThrow(error);
  });
});
