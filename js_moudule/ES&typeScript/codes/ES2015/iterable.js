// const s = new Set(['foo', 'bar', 'baz'])
// const iterator = s[Symbol.iterator]()

// console.log('iterator===>', iterator); //[Set Iterator] { 'foo', 'bar', 'baz' }


// console.log(iterator.next()) // { value: 'foo', done: false }
// console.log(iterator.next()) // { value: 'bar', done: false }
// console.log(iterator.next()) // { value: 'baz', done: false }
// console.log(iterator.next()) // { value: undefined, done: true }





// 实现可迭代接口 iterable
const obj = {
  store: ['foo', 'bar', 'baz'],
  [Symbol.iterator]: function() {
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


// 可迭代接口优点
