const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = r => r.toUpperCase()



// 函数组合
// function compose(a, b) {
//   return function(value) {
//     return a(b(value))
//   }
// }
// const last = compose(first, reverse)
// const arr= [1,2,3,4,5,6]
// console.log(last(arr))






// Lodash中的组合函数 —— flow()/flowRight()
const _ = require('lodash')

const f = _.flowRight(toUpper, first, reverse)
console.log(f(['one', 'two', 'three']))






// 自己实现一个lodash-flowRight
// function compose(...args) {
//   return function(value) {
//     return args.reverse().reduce(function(pre, curr) {
//       return curr(pre)
//     },value)
//   }
// }
const compose = (...args) => value => args.reverse().reduce((pre, curr) => curr(pre), value)

const f1 = compose(toUpper, first, reverse)
console.log(f1(['one', 'two', 'three']))






// 函数组合要满足组合率
const f2 = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse)
// const f2 = _.flowRight(_.toUpper, _.flowRight(_.first, _.reverse) )
console.log(f2(['one', 'two', 'three']))






// 函数组合-调试
// NEVER SAY DIE  --> never-say-die
const split = _.curry((sep, str) => _.split(str, sep))

const join = _.curry((sep, arr) => _.join(arr, sep))

const map = _.curry((fn, arr) => _.map(arr, fn))

// const log = (v) => {
//   console.log(v)
//   return v
// }

const trace = _.curry((tag, v) => {
  console.log('tag===>', tag, v);
  return v
})

const fn3 = _.flowRight(join('-'),trace('map之后'), map(_.toLower), trace('split之后'), split(' '))
console.log(fn3('NEVER SAY DIE'))

