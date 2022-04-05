//自己定义了一个常量  告诉他是生产环境还是开发环境

const isProduction = true;
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../build")
    }
}