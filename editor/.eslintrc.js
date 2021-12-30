const lintConfig = require('../.eslintrc.js');
lintConfig.rules['import/no-unresolved'] = 'off';
module.exports = lintConfig;
