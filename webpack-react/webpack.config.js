
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "my-first-webpack.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: path.join(__dirname, "dist", "index.html")
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // port: 3000
        port: 8080,
        disableHostCheck: true
    }
};

module.exports = config;







