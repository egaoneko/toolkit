const jestConfig = require('../jest.config');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

jestConfig.moduleNameMapper = {
  ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
module.exports = jestConfig;
