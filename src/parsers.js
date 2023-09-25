import YAML from 'yaml';

export default (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return YAML.parse(data);
    case 'yml':
      return YAML.parse(data);
    default:
      throw new Error(
        `Invalid file extension: '${extension}'! Try supported formats: 'json', 'yml', 'yaml'.\n`,
      );
  }
};
