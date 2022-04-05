const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
// const CleanWebpackPlugin = require()

module.exports = {
    entry: {
        react: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, "./dll"),
        filename: "dll_[name].js",
        library: 'dll_[name]'  //当你这个东西是一个库的时候
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false //不让他生成注释相关的代码, 将抽取到的注释删掉
            })
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            name: "dll_[name]",
            path: path.resolve(__dirname, "./dll/[name].manifest.json") //这个文件可以对上面的 库进行描述
        }),
        // CleanWebpackPlugin()
    ]

}