import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parseDataByFormat from './parsers.js';

const getAbsolutePath = (filepath) => {
  const normalizedPath = path.normalize(filepath);
  const absolutePath = path.isAbsolute(normalizedPath)
    ? normalizedPath
    : path.resolve(process.cwd(), normalizedPath);
  return absolutePath;
};

const readFile = (filepath) => {
  const absolutePath = getAbsolutePath(filepath);
  try {
    return fs.readFileSync(absolutePath, 'utf-8');
  } catch (error) {
    throw new Error(`Unable to read file at path: ${absolutePath}`);
  }
};

const getFileExtension = (filepath) => path.extname(filepath);

const getFileData = (filePath) => {
  const fileData = readFile(filePath);
  const fileExtension = getFileExtension(filePath);
  return parseDataByFormat(fileData, fileExtension);
}

const buildDiff = (data1, data2) => {
  const fileData1 = getFileData(data1);
  const fileData2 = getFileData(data2);

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
