const path = require('path');
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: 'bundle.js', //输出的文件的名字
        path: path.resolve(__dirname, "./build")  //path.resolve这个文件是绝对路径  找到这个webpack.config文件的绝对路径 然后再里面做拼接
    },
    module: {
        rules: [

            {
                test: /\.css/,//匹配资源,这个规则使用正则表达式 .是一个特殊文件 所以需要转义
                // loader: "css-loader",
                use: [
                    "style-loader", //从下往上依次处理
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2// @import里面加载的新的文件会被下面的less-loader重新处理
                        }
                    },
                    "less-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader", //从下往上依次处理
                    "css-loader",
                    "less-loader",
                    "postcss-loader"
                ]
            }
        ]
    }
}