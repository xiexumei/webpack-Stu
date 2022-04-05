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
    "no-unused-vars":'off',
    "quotes":[
      "error", //第一个值是当遇到这种错误的时候 你是给我抱一个错误呢 还是警告呢
      "double" //默认是双引号  第二是我希望要的值
    ]
  }
}
