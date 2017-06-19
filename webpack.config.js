const path = require('path');

module.exports = {
  entry: {
    app: "./src/index.js",
    test: "./test/index.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          }
        }
      }
    ]
  }
};
