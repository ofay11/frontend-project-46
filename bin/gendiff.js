#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two JSON files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filePath1, filePath2) => {
    const diffOutput = genDiff(filePath1, filePath2, program.opts().format);
    console.log(diffOutput);
  });

program.parse();

if (program.args.length !== 2) {
  console.error('Please provide two filepaths for comparison.');
  program.help();
}
