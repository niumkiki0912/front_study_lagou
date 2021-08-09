// Funtor 函子
// class Container {
//   constructor(value) {
//     this._value = value
//   }

//   map(fn) {
//     return new Container(fn(this._value))
//   }
// }

// let r = new Container(5)
//   .map(x => x + 1)
//   .map(x => x * 2)
// console.log('r===>', r); // Container {_value: 12}





class Container {
  // 使用class的静态方法，of用来替代new Container的作用； 更满足函数式编程的方式
  static of(value) {
    return new Container(value)
  }
  constructor(value) {
    this._value = value
  }

  map(fn) {
    return Container.of(fn(this._value))
  }
}

// 链式编程
const r = Container.of(5)
            .map(x => x + 2)
            .map(x => x * x)
console.log('r===>', r);
