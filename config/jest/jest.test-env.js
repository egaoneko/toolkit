const Environment = require('jest-environment-jsdom').default;

module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup();
  }
};
