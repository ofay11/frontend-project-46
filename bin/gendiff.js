#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    if (program.args.length !== 2) {
      console.error('\nPlease provide two filepaths for comparison.');
      program.help();
    }
    const diffOutput = genDiff(filePath1, filePath2, program.opts().format);
    console.log(diffOutput);
  });

program.parse();
