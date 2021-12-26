const deps = require('./package.json').dependencies;

module.exports = {
  name: 'editor',
  library: { type: 'var', name: 'editor' },
  remotes: {
    '@toolkit/layout': 'layout',
    '@toolkit/navbar': 'navbar',
  },
  shared: {
    ...deps,
    react: { singleton: true, eager: true, requiredVersion: deps.react },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
