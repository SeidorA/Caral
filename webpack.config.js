const { resolve } = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
};