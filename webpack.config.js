const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[hash].js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".html"],
        alias: {
            "lib": "src/lib"
        }
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.t(s|sx)?$/,
                exclude: path.resolve(__dirname, "./node_modules/"),
                use: {
                    loader: 'swc-loader'
                }
            },
            {
                test: /\.s(a|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "public/index.html")}),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
