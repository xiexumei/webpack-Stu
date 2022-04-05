const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: "nosources-source-map",
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js', //输出的文件的名字
        path: path.resolve(__dirname, "./build"), //path.resolve这个文件是绝对路径  找到这个webpack.config文件的绝对路径 然后再里面做拼接
        // assetModuleFilename: 'img/[name].[hash:6].[ext]'
    },
    //他是为开发过程中 提供的一个本地服务
    devServer:{
        hot:true,
        publicPath:"/abc", //如果只是 / 的话  默认访问的是localhost:8888

    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    "eslint-loader",                    
                    {
                        loader: "babel-loader",//用babel-loader来处理我们加入的js代码
                       
                    }
                ]
            }, {
                test: /\.ts$/
                ,
                use: "babel-loader"
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "nihao",
            template: './src/index.html'
        }),

    ]
}