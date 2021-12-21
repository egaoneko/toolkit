const path = require('path');
const { generate } = require('@toolkit/schema/lib');

generate(path.join(__dirname, '../schemas'), path.join(__dirname, '../src/schemas'));
