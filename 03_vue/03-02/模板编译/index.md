### 模板编译的作用
+ vue 2.x 使用vNode描述视图以及各种交互，用户自己编写Vnode比较复杂
+ 用户只需要编写类似html 的代码 --- vue.js模板，通过编译器将模板转换为返回VNode的render函数
+ .vue文件会被webpack在构建的过程中转换为render函数(运行时编译、构建时编译)


### 模板编译的过程
#### 编译入口
+ `src/platforms/web/entry-runtime-with-compiler.js`
  ```js
    Vue.prototype.$mount = function (
      ...
      const options = this.$options
      // 将template转化为render函数
      const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns
      ...
    )
  ```
+ 调试过程
  + `./compiler/index` 
    ```js
    import { createCompiler } from 'compiler/index'
    const { compile, compileToFunctions } = createCompiler(baseOptions
    ```
  +  `compiler/index`
    ```js
      import { createCompilerCreator } from './create-compiler'
      export const createCompiler = createCompilerCreator(function baseCompile (
        template: string,
        options: CompilerOptions
      ): CompiledResult {
      ...
      })
    ```
  + `./create-compiler`
    ```js
      import { createCompileToFunctionFn } from './to-function'
      export function createCompilerCreator (baseCompile: Function): Function {
        return function createCompiler (baseOptions: CompilerOptions) {
          function compile () {
            ...
          }
          return {
            compile,
            compileToFunctions: createCompileToFunctionFn(compile)
          }
        }
      }

    ```


#### 
1. 抽象语法树 ast
  + 使用对象的结构描述树形的代码结构， 对象中记录父子节点形成树
  + 此处的ast 是用来描述树形结构的html字符串
2. 使用 ast 原因
  + 模板字符串转化成ast后，可以通过ast对模板做优化处理
  + 标记模板中的静态内容，在patch是的时候可以直接跳过静态内容
  + 在patch的过程中静态内容不需要对比和重新渲染

