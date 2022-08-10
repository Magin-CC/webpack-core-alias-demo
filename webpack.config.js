module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  resolve: {
    alias: {
      os: "os-browserify/browser",
    },
  },
};
