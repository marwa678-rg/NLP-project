const webpack = require ("webpack")
 const path = require("path")




module.exports ={
  entry:"./src/client/index.js",
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }
  ]
}