/**
 * Created by frank on 6/21/17.
 */
const yaml = require('js-yaml');
const fs   = require('fs');

const file = process.argv[2];

try {
  const doc = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
  for (let key in doc.services) {
    if (doc.services.hasOwnProperty(key) && doc.services[key].build) {
      delete doc.services[key].build;
    }
  }
  const updatedDoc = yaml.dump(doc);
  fs.writeFileSync(file, updatedDoc);
  console.log(updatedDoc);
}
catch (e) {
  console.log(e);
}
