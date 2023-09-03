import YAML from 'yaml';

const parseDataByFormat = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
      return YAML.parse(data);
    case '.yml':
      return YAML.parse(data);
    default:
      throw new Error(`Unknown format ${format}`);
  }
};

export default parseDataByFormat;
