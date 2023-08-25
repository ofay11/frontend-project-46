import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (filepath) => {
  const normalizedPath = path.normalize(filepath);
  console.log("🚀 ~ file: index.js:58 ~ readFile ~ normalizedPath:", normalizedPath)
  const absolutePath = path.isAbsolute(normalizedPath)
    ? normalizedPath
    : path.resolve(process.cwd(), normalizedPath);
    console.log("🚀 ~ file: index.js:59 ~ readFile ~ absolutePath:", absolutePath)

  try {
    return fs.readFileSync(absolutePath, 'utf-8');
  } catch (error) {
    throw new Error(`Unable to read file at path: ${absolutePath}`);
  }
};

const parseJSON = (jsonString) => JSON.parse(jsonString);

const buildDiff = (data1, data2, format = 'stylish') => {
  const fileData1 = parseJSON(readFile(data1));
  const fileData2 = parseJSON(readFile(data2));

  const keys = _.union(Object.keys(fileData1), Object.keys(fileData2)).sort();
  const diff = keys.map((key) => {
    if (!_.has(fileData2, key)) {
      return `- ${key}: ${fileData1[key]}`;
    }
    if (!_.has(fileData1, key)) {
      return `+ ${key}: ${fileData2[key]}`;
    }
    if (fileData1[key] === fileData2[key]) {
      return `  ${key}: ${fileData1[key]}`;
    }
    return `- ${key}: ${fileData1[key]}\n  + ${key}: ${fileData2[key]}`;
  });

  const diffOutput = `{\n  ${diff.join('\n  ')}\n}`;
  return diffOutput;
};

export default buildDiff;
