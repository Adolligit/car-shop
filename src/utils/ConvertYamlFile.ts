import yaml from 'yaml';
import fs from 'fs';

function converted(yamlFile:string) {
  const readed = fs.readFileSync(yamlFile, 'utf8');

  return yaml.parse(readed);
}

export default converted;