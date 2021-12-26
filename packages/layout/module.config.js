const deps = require('./package.json').dependencies;

module.exports = {
  name: 'layout',
  library: { type: 'var', name: 'layout' },
  filename: 'remoteEntry.js',
  exposes: {
    // expose each component
    './dist/components/EditorLayout': './src/components/EditorLayout',
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
