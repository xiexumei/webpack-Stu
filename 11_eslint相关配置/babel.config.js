module.exports={
    presets:[
      [
        "@babel/preset-env",{
            //false 表示我们不适用ployfill   usage 根据源代码里面需要那些ployfill就使用  entry全部使用
            useBuiltIns:"usage",
            corejs:3
        }
      ],
      ["@babel/preset-react"],
      ["@babel/preset-typescript"]

    ],
    // plugins:[
    //     ["@babel/plugin-transform-runtime",{
    //         corejs:3
    //     }]
    // ]
}