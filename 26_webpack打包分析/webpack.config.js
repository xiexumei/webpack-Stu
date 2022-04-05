const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CssMinizerPlugin = require('css-minimizer-webpack-plugin');
var webpack = require('webpack');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const glob = require("glob");

//测量打包时间的插件
const speedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new speedMeasurePlugin();

//包大小分析插件
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

let isProduction = false;
const margeConfig = {
    mode: "production",
    entry: {

        main: "./src/main.js"
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "./build"),
        chunkFilename: "js/[name].chunk.js",
        publicPath: ""
    },
    externals: { //排除的库
        lodash: "_", //后面的这个是库暴露出来的全局对象
        dayjs: "dayjs"

    },
    //专门为webpack-dev-server来写配置的
    devServer: {
        hot: true,
        // publicPath:"/abc",
        contentBase: "./build"

    },
    optimization: {
        usedExports: true, //production模式下默认为true 它的目的是标注出来哪些函数是没有被使用的
        minimize: false,
        minimizer: [ //这里默认会帮我们使用这个插件
            new TerserPlugin({ //然后和terser结合使用  由terser将没有使用的函数，从我们的代码里面删除
                parallel: true,
                extractComments: false,//是否需要将注释抽取到单独的文件里面
                terserOptions: {
                    ///这里面可以写一些其他额外的配置
                    mangle: true,
                    toplevel: true,
                    keep_classnames: true,
                    keep_fnames: true
                }
            })
        ],

        runtimeChunk: {
            // name:"runtime-why"
            name: function (entrypoint) {
                return 'why' + entrypoint.name;
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true //将打包后的静态资源做一个注入
        }),

        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:8].css"
        }),
        new BundleAnalyzerPlugin()

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
                    MiniCssExtractPlugin.loader,//开发环境需要使用 生产环境不需要使用
                    "css-loader"
                ]
            }
        ]
    }
}
// module.exports = smp.wrap(margeConfig); //这样就可以测量这个配置里面

module.exports = margeConfig;