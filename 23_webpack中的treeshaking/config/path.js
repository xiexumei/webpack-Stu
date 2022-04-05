const path = require('path');

//node中的api
const appDir = process.cwd();
const resolveApp = (relativePath) => {
    return path.resolve(appDir, relativePath) //将你传过来的相对路径和我当前的路径做一个拼接
}
module.exports = resolveApp;