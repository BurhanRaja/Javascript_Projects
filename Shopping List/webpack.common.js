const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve(__dirname, 'public', 'index.html')
        })
    ]
}