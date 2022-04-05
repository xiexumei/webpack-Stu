//这里也需要做插件分离
const presets = [
    ["@babel/preset-env"],
    ["@babel/preset-react"]
]

// const isProduction = process.env.production;

const plugins = [["react-refresh/babel"]]
// if (!isProduction) {
//     plugins.push(["react-refresh/babel"])
// } else {

// }
module.exports = {
    presets: presets,
    plugins: plugins
}