### flow
- 移除类型注解
  - 通过 flow-remove-types 工具移除`yarn flow-remove-types . -d dist`
  - 通过 @babel/preset-flow 移除 `yarn babel src -d dist`




### TypeScript
1. js的超集, Angular/vue 3.0
   ts 是渐进式
   es6转换为es5   yarn tsc 'name'
2. 原始类型
  ```javascript
  const a: string = 'foo'

  const b: number = 1

  const c: boolean = true

  const e:void = undefined

  const f:null = null

  const g:undefined = undefined

  const h:symbol = Symbol() // 报错
  ```

3. 标准库
  - 是内置对象所对应的声明
  ```javascript
  // tsconfig.json
  "lib": ["es2015", "DOM"], 
  ```
