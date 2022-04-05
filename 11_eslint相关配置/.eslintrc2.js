module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [//多的
        "eslint:recommended",//继承  意思是可以继承一些其他规则的配置信息
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",//解释器 来对我们的代码进行解析
    "parserOptions": {//多的
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest"
    },
    "plugins": [//你可能需要用到的插件
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
