const theme = require('@toolkit/config').tailwindcss.theme.default;
const defaultTailwindConfig = require('../../tailwind.config');

module.exports = {
  ...defaultTailwindConfig,
  theme,
};
