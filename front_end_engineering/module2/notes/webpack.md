### webpack打包

#### 一. 模块打包工具的由来
+ Es Modules 存在环境兼容问题
+ 模块文件较多，网络请求频繁
+ 所有资源都需要模块化: 不只是js，css、html都需要



#### 二. 模块打包工具概要
+ webpack， rollup, parsel
+ webpack
  - 模块打包器 + loader + 代码拆分(code Spliting) + 资源模块
+ 打包工具解决的是前端整体的模块化， 不单指js



#### 三. webpack使用
1. webpack配置文件
  ```js
    const path = require('path')
    module.exports = {
      entry: './src/main.js', // 输入
      output: {
        filename: 'bundle.js', // 输出
        path: path.join(__dirname, 'output') // 输出目录(绝对路径 通过path转换)
      },
      mode: 'none' //工作模式: production、development 和 none
    }
  ```
2. webpack只是打包工具，加载器可以用来编译转换代码
3. webpack加载资源方式
  - 兼容多种模块标准，非必要不要混合使用模块标准
  - 样式代码中的@mport 和 url函数也会触发相应资源加载
  - html中图片标签的src属性



#### 四.webpack核心工作原理
- webpack根据配置找到入口文件
- 生成依赖树： 顺着入口文件的代码，根据import、 require等语句，解析这个文件所依赖的资源模块。然后分别解析每个文件对应的依赖， 最后形成所有文件用到依赖的依赖树
- 递归这个依赖树，找到每个节点所对应的资源文件
- 根据配置文件中的rules属性，找到模块所对应的loader，交给对应的loader去处理 --- loader机制是webpack的核心
- 最后将处理后的结果放到配置中定义的出口文件中



#### 五. loader
- 从输入到输出的一种转换
- loader是一种管道的概念，对于同一个资源可以一次使用多个loader
- 专注实现项目资源的加载
1. 常用加载器分类: 
  - 编译转换类: css-loader
  - 文件操作类型: file-loader
  - 代码质量检查: eslint-loader

2. 文件资源加载器 file-loader
3. url加载器  url-loader
  - 小文件使用data URLs, 减少请求次数
  - 大文件以单个模式存放，提高加载速度
4. babel-loader  js编译器，使我们可以放心使用es2015的语法



#### 六. 插件机制
1.  plugin： 解决其他自动化工作
  - clean-webpack-plugin 清空dist中的文件
  - html-webpack-plugin 自动生成html并使用生成的bundle文件
  - copy-webpack-plugin 将不需要构建的目录拷贝到输出文件


2. 开发plugin
  - loader在加载模块的环节工作。插件的作用范围更广，几乎触及每一个环节
  - plugin通过钩子机制实现： 为了便于插件的拓展，webpack几乎给每个环节都埋下了钩子
    - 每个插件必须是一个函数， 或者是一个包含apply方法的对象。一般我们都会把这个插件定义为一个类型，然后在这个类型中定义一个apply方法


3. webpack-dev-server
  - 保存在内存中，大大提高构建效率
  - 提供对开发者友好的开发服务器

4. sourceMap
  - 作用: 解决了源代码与运行代码不一致所产生的调试问题
  - 几种source-map
    - eval: 将模块代码放到eval函数中执行，并通过sourceURL标注文件的路径，没有生成对应的source-map
    - eval-source-map: 定位到具体的文件、具体的行和列信息。相比于eval生成了source-map 
    - cheap-eval-source-map: 定位到具体的文件、具体的行信息。相比上一个少了列信息。 阉割版，生成速度更快一点。 经过加工的结果
    - cheap-eval-module-source-map: 也只能定位到行。没有经过loader转化的源代码
  - 选择合适的source-map
    - 开发模式: cheap-eval-module-source-map ---> a. 代码风格每行不找过80，定位到行就够了 b.代码经过loader转换过后差异较大，更需要调试转换前的  c. 首次打包速度慢，重新打包速度较快
    - 生产模式: none/nosources-source-map ---> a.souceMap会暴露源代码

5. HMR-模块热替换
  - 只将修改的模块实时替换至应用中，应用的应用状态不会因此而改变。提高了开发者工作效率
  - hmr api 
  ```js
    module.hot.accept('./heading', () => {
      console.log('heading模块发生了变化')
    })
  ```


6. 生产环境的优化
  - 生产环境注重运行效率， 开发环境注重开发效率
  - 不同的环境配置方式
    - 配置文件根据环境不同导出不同的配置
    - 一个环境对应一个配置文件

7. definePlugin
  - 内置插件，为代码注入全局成员。在production模式下，默认启用，并往代码中注入process.env.NODE_ENV的常量


8. tree-shaking
  - 去掉代码中的未引用部分， 在生产环境下自动开启
  - 并不是webpack中某一个配置选择项，而是一组功能搭配使用的效果，生产环境中自动开启
  ```javascript
    module.exports =  {
      optimization: {
        usedExports: true,  // 负责标记未引用代码
        minimize: true // 负责摇掉dead-code 
      }
    }
  ```
  - tree-shaking与bable
    - 使用bable-loader会使tree-shaking失效。
    - tree-shaking前提必须使用es-module来组织代码。webpack打包之前是将模块根据配置交给不同的loader来处理，最后将loader处理过的结果打包到一起。为了转换es新特性，会使用babel-loader处理js文件，babel处理文件时，就有可能将 es Module --> CommonJS(例如使用 @babel/preset-env插件)  
    ```js
      module.exports = {
        optimization: {
          usedExports: true,
          // minimize: true
        },
        module: {
          rules: [
            {
              test: /.js$/,
              use: {
                loader: 'babel-loader',
                // presets: ['@babel/preset-env'] // 最新版本的babel-loader 自动关闭了es Module的转换
                options: {
                  presets: [
                    // ['@babel/preset-env', { modules: 'commonjs'}] //默认为auto, 强制使用bable的es Module插件， tree-shaking失效
                    ['@babel/preset-env', { modules: false}] //  不使用bable的es Module插件
                  ]
                }
              }
            },
          ]
        }
      }
    ```

9. 合并模块函数 
  - concatenateModules(scope-hoist) 尽可能将所有模块合并输出到一个函数中,既提升运行效率，又减少代码体积


10. sideEffects
  - webpack4新增
  - 副作用： 模块执行时除了导出成员之外所做的事情
  - 一般用于npm包标记是否有副作用


11. 代码分割 code-splitting
  - webpack问题：所有代码最终都被打包到一起, 造成bundle过大，但是并不是所有模块在启动时都是必要的，所以需要分包，按需加载; 模块打包 + 代码分割
  - 多入口打包 ---> 一个页面对应一个打包入口，不同页面公共的部分单独提取
  - es Modules的动态导入功能 ---> 需要用到某个模块时，再加载这个模块； 动态导入的方式，会被自动分包
  ```js
    // 魔法注释
    import(/* webpackChunkName: 'posts' */'./posts/posts').then( ({default: posts}) => {
      mainElement.appendChild(posts())
    })
  ```

12. 压缩css
  - MiniCssExtractPlugin: css模块的按需加载， 提取css到单个文件
  - OptimizeCssAssetsWebpackPlugin css代码压缩, 这种压缩类插件建议放到optimization中的minimizer


#### 七. 其他
1. 输出文件名hash
  - 服务器部署时会启用静态资源缓存，提升应用响应速度。
  - 为了解决缓存时间过长重新发版后没有及时更新的问题，生产模式下文件名使用hash