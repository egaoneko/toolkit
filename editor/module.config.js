const deps = require('./package.json').dependencies;

module.exports = {
  name: 'editor',
  library: { type: 'var', name: 'editor' },
  remotes: {
    '@toolkit/layout': 'layout',
    '@toolkit/navbar': 'navbar',
  },
  shared: {
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
