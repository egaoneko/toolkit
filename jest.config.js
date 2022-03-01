module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  roots: ['<rootDir>/src'],
  testRegex: '.*\\.test\\.[tj]sx?$',
  transformIgnorePatterns: ['^.+\\.module\\.(css|sass|scss)$'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      diagnostics: true,
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.js'],
  snapshotResolver: '<rootDir>/config/jest/jest.snapshot-resolver.js',
};
