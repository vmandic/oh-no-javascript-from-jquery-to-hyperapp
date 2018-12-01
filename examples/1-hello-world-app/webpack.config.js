const path = require("path");

module.exports = {
  mode: "development",

  entry: path.join(__dirname, "src", "index"),

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /.js$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "bower_components")
        ],
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: [".json", ".js", ".jsx", ".css"]
  },

  target: "web",

  devtool: "source-map",

  devServer: {
    publicPath: path.join("/"),
    contentBase: path.resolve(__dirname, "public")
  }
};
