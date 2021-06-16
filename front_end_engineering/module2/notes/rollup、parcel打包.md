## rollup
- esModule的打包器，可以将项目中散落的细小模块打包成整块的代码
- 相比于webpack, rollup更加小巧， rollup并不支持类似HMR这种高级特性


#### 一、快速上手
```shell
  yarn add rollup --dev
  yarn rollup [入口文件: ./src/index.js] --format [输出格式: iife] --file [输出目录: dist/bundle.js]
```
rollup默认自动开启tree-shaking(最早提出)


#### 二、配置文件
```js
  // rollup.config.js
  export default {
    input: './src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'iife'
    }
  }
  
  // yarn rollup --config  [配置文件: rollup.config.js]  
```


#### 三、使用插件
- rollup本身的功能就只是esModule的打包，当我们有其他需求时，例如：加载其他类型资源模块、 导入commanJS模块、 编译ECMAScript新特性，rollup只支持使用插件来扩展
- 插件是rollup唯一的扩展途径

1. eg: rollup-plugin-json
2. 加载NPM模块 rollup-plugin-node-resolve, 可以在代码中直接使用模块名称导入模块
3. 加载commonjs模块 rollup-plugin-commonjs
```js
  // rollup.config.js
  import json from 'rollup-plugin-json'
  import resolve from 'rollup-plugin-node-resolve'
  import commonjs from 'rollup-plugin-commonjs'

  export default {
    input: './src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'iife'
    },
    plugins: [
      json(),
      resolve(),
      commonjs()
    ]
  }


  // src/index.js
  import {version, name} from '../package.json'
  console.log('===>', version);
  console.log('===>', name);

  import _ from 'lodash-es'
  log(_.camelCase('hello world'))

  import cjs from './cjs-module'
  log(cjs)


```




#### 四、代码拆分
```js
  // src/index.js

  import('./logger').then(({ log }) => {
    log('code splitting~')
  })
```
1. 使用代码拆分时需要使用AMD、commonjs的标准
2. 多入口
```js
  export default {
    // input: ['src/index.js', 'src/album.js'],
    input: {
      foo: 'src/index.js',
      bar: 'src/album.js'
    },
    output: {
      // file: 'dist/bundle.js',
      // format: 'iife'
      dir: 'dist',
      format: 'amd'
    },
  }
```



#### 五、rollup选用原则
webpack更适合开发应用程序； rollup更适合开发框架或类库, eg: react、vue; webpack大而全，rollup小而美
1. 优点
  - 输出结果更加扁平
  - 自动移除未引用代码
  - 打包结果可以正常阅读
2. 缺点
  - 加载非ESM的第三方模块比较复杂
  - 模块最终都被打包到一个函数中，无法实现HMR
  - 在浏览器中， 代码拆分依赖AMD库





* * *

## Parcel
零配置的前端应用打包器