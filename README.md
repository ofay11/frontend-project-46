### Tests and linter status:
[![Actions Status](https://github.com/ofay11/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/ofay11/frontend-project-46/actions)
[![GitHub Workflow Status](https://github.com/ofay11/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/ofay11/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/10a3c022852d23b1fdeb/maintainability)](https://codeclimate.com/github/ofay11/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/10a3c022852d23b1fdeb/test_coverage)](https://codeclimate.com/github/ofay11/frontend-project-46/test_coverage)

## About
This CLI application can compare two files (.json, or .yaml) and show the difference using three formatter for your taste.
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

## Install
Clone this repository and run commands from the cloned directory to install packages.
```bash
make install && make publish && npm link
```

## Examples
[![asciicast](https://asciinema.org/a/HYZNmQMrbizUM3ZouK2W8Brvn.svg)](https://asciinema.org/a/HYZNmQMrbizUM3ZouK2W8Brvn)
