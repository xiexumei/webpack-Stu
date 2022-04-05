const path = require('path');
const resolveApp = require('./path');

const merge = require('webpack-merge');
const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');
const commonConfig = function (env) {
    const isProduction = env.production;
    process.env.production = isProduction;
    return {
        //需要配置绝对路径  __dirname是当前目录所在的路径  entry会相对于context这个路径去找  如果直接./的话是找不到的
        // context:path.resolve(__dirname,"./"), //这里的这个entry写上相对路径，并不是相对于文件所在的路径  ，而是相对于context配置的路径
        entry: "./src/main.js", //这里的意思是我们要在src里面找main.js文件  但是这里的这个路径是不正确的
        output: {
            filename: "bundle.js",
            path: resolveApp("./build")
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),

            new ReactRefreshWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.jsx?$/i,
                    use: 'babel-loader'
                },

                {
                    test: /\.css/i,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                }
            ]
        }
    }
}

module.exports = function (env) {
    const isProduction = env.production;
    process.env.production = isProduction;
    return isProduction ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig)
}