module.exports = {
  mode: "development",
  entry: [
    "./src/index.js"
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/react", "@babel/preset-env"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    https: false,
    historyApiFallback: true,
    contentBase: "./",
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
