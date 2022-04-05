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

let isProduction = false;
module.exports = {
    mode: "production",
    entry: {
        // main: { import: "./src/main.js", dependOn: "shared" }, //告诉这个模块需要用这个lodash这样一个库
        // index: { import: "./src/index.js", dependOn: "shared" }, //这样的意思是单独对lodash做一个打包
        // // lodash: "lodash",
        // // dayjs:"dayjs"
        // shared: ["lodash", "dayjs"]
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
    // optimization: {
    //     minimize: true,
    //     minimizer: [ //这里默认会帮我们使用这个插件
    //         new TerserPlugin({})
    //     ]
    // },
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
        // minimizer: [
        //     // new TerserPlugin({
        //     //     extractComments: false
        //     // })
        // ],
        //natural 使用自然数（不推荐)
        //named 使用包所在目录作为name(在开发环境中推荐)
        //deterministic:生成id  针对相同文件生成的id是不变的 
        // chunkIds:"named",
        // splitChunks: {
        //     // chunks: "async",
        //     //initial 处理同步代码
        //     //all 不管是同步还是异步 都会进行处理
        //     chunks: "all",
        //     minSize: 20000, //最小尺寸  如果拆分出来一个，那么拆分出来的这个包的大小最小为minSize
        //     maxSize: 20000,  //将大于maxSize的包 拆分成不小于minSize的包
        //     minChunks: 1,//引入的这个包至少被导入了几次 会单独进行打包
        //     cacheGroups: {//所有的库都加载完毕之后 在全部输出
        //         vendors: {
        //             test: /[\\/]node_modules[\\/]/, //匹配
        //             filename: "[id]_vendors.js" //如果你的这个包是node_module的话 就会走这个地方
        //         },

        //         // bar:{
        //         //     test:/bar_/, //以bar开头的文件 单独给他做一个打包
        //         //     filename:"[id]_bar.js"
        //         // }
        //         default:{
        //             minChunks:2, //如果一个包被引入了两次 那么我们也给他打包出去一个文件
        //             filename:"common_[id].js"
        //         }
        //     }
        // }
        runtimeChunk: {
            // name:"runtime-why"
            name: function (entrypoint) {
                return 'why' + entrypoint.name;
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject:true //将打包后的静态资源做一个注入
        }),

        // new ReactRefreshWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "css/[name].[hash:8].css"
        // }),
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, "./dll/react.manifest.json")
        // }),
        // new AddAssetHtmlPlugin({
        //     filepath: path.resolve(__dirname, "./dll/dll_react.js")
        // }),
        // new CssMinizerPlugin(),
        // new webpack.optimize.ModuleConcatenationPlugin(),
        // new PurgeCssPlugin({
        //     paths: glob.sync(), //你要检查那个里面的源代码需要做tree-shaking 不只是css 
        //     safelist: function () {
        //         return {
        //             standard: ["body"] //不希望对哪些css做tree-shaking
        //         }
        //     }
        // }),
        // new CompressionPlugin({
        //     threshold: 0,
        //     test: /\.(css|js)$/i,  //只有匹配到.css 或者.js结尾的时候才进行压缩
        //     minRatio:0.5, //压缩比列达不到minRatio也是不会进行压缩的
        //     algorithm:"gzip",
        //     // exclude:''
        //     // include 排除哪些是需要压缩的  包含哪些是需要压缩的
        // })
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