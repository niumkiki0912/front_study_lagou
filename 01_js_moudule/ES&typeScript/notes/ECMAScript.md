- es6 -> es2015

### let、const、var
- 先声明变量再使用，暂时性死区
- 块级作用域
- const常量、let变量



### 数组解构

### 对象解构


### 模板字符串
- 标签函数 
```javascript
function myTagedFn(string) {
  console.log(string)
}
const result = myTagedFn`helo world`

```



### 字符串扩展方法
- startsWith, endWidth, includes



### 函数
- 参数的默认值
  ```javascript
  // 传统方式
  function foo(enable) {
    enable = enable=== undefined ? true: enable
    console.log(enable)
  }
  // es6
  function foo(enable = true) {
    console.log(enable)
  }
  ```

- 函数的剩余参数
```javascript
function foo(...args) {
  console.log(args)
}
foo(1,2,3,4)
```





### 展开数组


### 箭头函数
- 使用更简单易读
- 箭头函数都是匿名函数
- 箭头函数不能作为构造函数，不能使用new 
- 箭头函数不绑定arguments, 使用rest参数...解决
- this指向
  - 箭头函数本身没有this指向，在声明时可以捕获其所在的上下文中的this供自己使用
  - 箭头函数不会改变this指向
```javascript
const person = {
  name: 'jerry',
  sayName: function() {
    console.log(this.name)
  },
  // sayName: () => {
  //   console.log(this.name)
  // }
}
console.log(person.sayName())
```

- 其他
  （1）.箭头函数不能Generator函数，不能使用yeild关键字。
  （2）.箭头函数不具有prototype原型对象。
  （3）.箭头函数不具有super。
  （4）.箭头函数不具有new.target。



### 对象字面量


### Object
- Object.assign(obj1, obj2, obj3...) 将多个源对象的属性复制到一个目标对象中去
- Object.is() 判断两个值是否相等, 用的较少
```javascript
  // ===无法判断    +0 和 -0   
  console.log(NaN === NaN) // false
  console.log(+0 === -0) // true

  Object.is(NaN, NaN) // true
  Object.is(+0, -0) // false
```





### Proxy
- 为对象设置访问代理器的
```javascript
const person = {
  name: 'tom',
  age: 18
}


const persoProxy = new Proxy(person, {
  get(target, property) {
    console.log('get',target, property)
    return target[property] ? target[property] : 'default'
  },
  set(target, property, value) {
    if(property === 'age') {
      if(!Number.isInteger(value)) {
        throw new TypeError(`${value} is not an in`)
      }
    }
    target[property] = value
    console.log('set', target, property, value)
  },
})

persoProxy.name
persoProxy.name = 'jerry'
persoProxy.age = 20

persoProxy.gender = '女'
```

- 与object.defineProperty的对比
  - Object.defineProperty() 的问题主要有三个：
    不能监听数组的变化
    必须遍历对象的每个属性
    必须深层遍历嵌套的对象
  - proxy
    - 针对整个对象，而不是对象的某个属性
    - 支持数组：不需要对数组的方法进行重载
    - 嵌套支持：get里边递归调用proxy并返回
    - 第二个参数有13个拦截方法，相对来说更丰富
    - 兼容性不够好
  


### 遍历
- for循环 遍历数组
- for in 遍历键值对
- for of: 作为遍历所有数据结构的统一方式
  


### 可迭代接口
1. 概述：js原有的四种数据结构(数组、对象、Map、Set)， 再加上用户还可以组合使用它们，定义自己的数据结构。这样就需要一种统一的接口机制，来处理所有不同的数据结构。iterator就是这样一种接口机制
2. 作用： 
  - 为各种数据结构，提供一个统一简便的访问接口
  - 使得数据结构内部成员能够按照某种次序排序
  - Iterator 接口主要供for...of消费
3. 默认iterator接口
  - 默认的iterator部署在数据结构的Symblo.iterator属性中，也就是说只要具有Symblo.iterator属性， 就认为是可遍历的
  - 原生具备 Iterator 接口的数据结构`Array、 Map、 Set、 String、 TypedArray、 函数的arguments对象、 nodeList对象`
  - 对于原生部署 Iterator的数据结构， 可以直接使用for...of遍历
  
  ```javascript
    const s = new Set(['foo', 'bar', 'baz'])
    const iterator = s[Symbol.iterator]() // 调用 Symbol.iterator这个属性，就得到了遍历器对象

    console.log('iterator===>', iterator); // [Set Iterator] { 'foo', 'bar', 'baz' }

    console.log(iterator.next()) // { value: 'foo', done: false }
    console.log(iterator.next()) // { value: 'bar', done: false }
    console.log(iterator.next()) // { value: 'baz', done: false }
    console.log(iterator.next()) // { value: undefined, done: true }
  ```
  - 对象没有默认部署，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换。严格地说，对象部署遍历器接口并不是很必要，因为这时对象实际上被当作 Map 结构使用。
  ```javascript
  // 实现可迭代接口 
  const obj = {
    store: ['foo', 'bar', 'baz'],
    // iterable
    [Symbol.iterator]: function () {
      let index = 0
      let _this = this
      // iterator
      return {
        // iterationResult
        next: function() {
          const result = {
            value: _this.store[index],
            done: index >= _this.store.length
          }
          index++
          return result
        }
      }
    }
  }
  for(let i of obj) {
    console.log('循环体', i)
  }
  ```
4. 调用 Iterator 接口的场合
- 解构赋值
- 扩展

  