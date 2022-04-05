const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:"production",
    devtool:'source-map',
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js', //输出的文件的名字
        path: path.resolve(__dirname, "./build"), //path.resolve这个文件是绝对路径  找到这个webpack.config文件的绝对路径 然后再里面做拼接
        // assetModuleFilename: 'img/[name].[hash:6].[ext]'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "nihao"
        }),
       
    ]
}