const _ = require('lodash')

const arr = ['jack', 'tom', 'jerry']

console.log( _.first(arr));
console.log( _.last(arr));
console.log( _.toUpper(_.first(arr)));

console.log( _.reverse(arr), arr); // 会改变原数组，所以不是一个纯函数， FP模块对应的是纯函数

const r = _.each(arr, (item,index) => {
  console.log(item, index)
})
console.log('r===>', r);
