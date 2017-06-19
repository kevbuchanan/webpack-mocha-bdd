module.exports = {
  entry: {
    app: "./src/index.js",
    test: "./test/index.js",
  },
  output: {
    filename: "js/[name].js",
    path: "./build",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: [],
      }
    ]
  }
};
