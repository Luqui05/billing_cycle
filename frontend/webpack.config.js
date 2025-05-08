const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname + "/public",
        filename: "./app.js",
    },
    devServer: {
        port: 8080,
        contentBase: "./public",
    },
    resolve: {
        extensions: ["", ".js", ".jsx"], // String vazia é suportada no Webpack 1
        alias: {
            modules: __dirname + "/node_modules",
            jquery: "modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js",
            bootstrap: "modules/admin-lte/bootstrap/js/bootstrap.js",
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        new ExtractTextPlugin("app.css"),
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/, // Suporte para .js e .jsx
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"], // Certifique-se de que esses presets estão instalados
                    plugins: ["transform-object-rest-spread"],
                },
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|jpg)$/,
                loader: "file-loader",
            },
        ],
    },
};
