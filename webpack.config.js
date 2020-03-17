const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: "sourc-map",
  externals: [nodeExternals()],
  output: {
    library: "DFSEO",
    libraryExport: "default",
    libraryTarget: "umd",
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
};
