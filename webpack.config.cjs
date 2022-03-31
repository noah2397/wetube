const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js",
  mode: `development`,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets", "js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, //모든 js파일을 가져다가 몇가지 변환을 시키고 싶다
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", { targets: "defaults" }]],
        },
      },
    ],
  },
};
