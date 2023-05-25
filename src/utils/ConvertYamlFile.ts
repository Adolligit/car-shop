import yaml from 'yaml';
import fs from 'fs';

function converted(yamlFile:string) {
  const read = fs.readFileSync(yamlFile, 'utf8');

  return yaml.parse(read);
}

export default converted;