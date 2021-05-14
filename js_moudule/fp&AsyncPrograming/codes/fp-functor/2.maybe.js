class MayBe {
  static of(value) {
    return new MayBe(value)
  }
  constructor(value) {
    this._value = value
  }

  map(fn) {
    // 判断外部传入的值是否是空值，是的话返回一个value为null的函子，否则的话就执行函数
    return this.isNothing()? MayBe.of(null) : MayBe.of(fn(this._value))
  }

  isNothing() {
    return this._value === null || this._value === undefined
  }
}

// const r = MayBe.of('hello')
//   .map(v => v.toUpperCase())
// console.log('r===>', r);

const r = MayBe.of(null)
  .map(v => v.toUpperCase())
console.log('r===>', r);




