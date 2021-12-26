const theme = require('@toolkit/config').tailwindcss.theme;
const defaultTailwindConfig = require('../tailwind.config');

module.exports = {
  ...defaultTailwindConfig,
  theme,
};
