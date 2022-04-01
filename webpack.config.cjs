const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/client/js/main.js",
  plugins: [new MiniCssExtractPlugin()],
  mode: `development`,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets", "js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, //모든 js파일을 가져다가 몇가지 변환을 시키고 싶다
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], //webpack은 뒤에서부터 시작한다
      },
    ],
  },
};
