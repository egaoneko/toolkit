const deps = require('./package.json').dependencies;

module.exports = {
  name: 'navbar',
  library: { type: 'var', name: 'navbar' },
  filename: 'remoteEntry.js',
  exposes: {
    // expose each component
    './dist/components/VerticalNavbar': './src/components/VerticalNavbar',
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
