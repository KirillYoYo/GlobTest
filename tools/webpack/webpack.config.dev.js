const path = require("path");

module.exports = {
  mode: 'development',
  entry: ['./src/Main.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: require('./webpack.plugins'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: require('./webpack.aliases'),
  },
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    static: {
      directory: path.join(__dirname, "/"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
};
