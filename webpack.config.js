const webpack = require('webpack');

module.exports = {
  entry: './node_modules/atom-ide-ui/pkg/hyperclick/lib/main.js',
  target: 'node',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  externals: [
    'atom',
    'electron',
    'remote',
    'log4js', // It's bundled with Atom.
  ],
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  plugins: [
    // log4js appenders have optional (non-existent) dependencies
    new webpack.IgnorePlugin(/.*/, /log4js\/lib\/appenders/),
  ],
};
