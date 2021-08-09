// 函数柯里化
// function checkAge(mini) {
//   return function(age) {
//     return age >= mini
//   }
// }

// es6
const checkAge = mini => age => age >= mini

const checkAge18 = checkAge(18)
const checkAge22 = checkAge(22)
// console.log(checkAge18(20))
// console.log(checkAge18(17))
// console.log(checkAge22(24))




// lodash-curry
const _ = require('lodash')


const match = _.curry(function (reg, str) {
  return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)

console.log(haveSpace('helloworld'))
console.log(haveNumber('123hhh'))

const filter = _.curry(function(fn, arr) {
  return arr.filter(fn)
})

const filterSpac = filter(haveSpace)


console.log(filter(haveSpace, ['John Connor', 'John_Donne', 'hello world']))
console.log(filterSpac(['John Connor', 'John_Donne', 'hello world']))






// 实现lodash-curry
function curry(fn) {
  return function curriedFn(...args) {
    // 判断实参和形参的个数
    if(args.length < fn.length) {
      return function() {
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    // 如果实参大于等于形参的个数。 args是剩余参数，是个数组形式，而返回的时候要展开（使用...）
    return fn(...args)
  }
}

function getSum(a, b, c) {
  return a + b + c
}
// const curried = _.curry(getSum)
const curried = curry(getSum)

// console.log(curried(1,2,3))
// console.log(curried(1)(2,3))
// console.log(curried(1,2)(3))




