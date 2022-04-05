const isProduction = false;
module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../build")
    },

    devServer: {
        hot: true,
        // publicPath:"/abc",
        contentBase: "./build"

    }
}