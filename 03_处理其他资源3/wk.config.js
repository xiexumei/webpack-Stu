const path = require('path');
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: 'bundle.js', //输出的文件的名字
        path: path.resolve(__dirname, "./build"), //path.resolve这个文件是绝对路径  找到这个webpack.config文件的绝对路径 然后再里面做拼接
        // assetModuleFilename: 'img/[name].[hash:6].[ext]'
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
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset",
                generator:{
                    filename:"img/[name].[hash][ext]" //
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:100*1024  //小于这个大小会被打包成base64
                    }
                }
            },
            {
                test:/\.ttf|eot|woff2?/i ,//这个问号是0个或者1个
                type:"asset/resource",
                generator:{
                    filename:"font/[name].[hash:6][ext]"
                }
            }
        ]
    }
}