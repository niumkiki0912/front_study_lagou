const fp = require('lodash/fp') 

// 函数组合-调试
// NEVER SAY DIE  --> never-say-die


const fn3 = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))
console.log(fn3('NEVER SAY DIE'))





// lodash 和 lodash/fp 模块中 map 方法的区别
const _ = require('lodash')
console.log(_.map(['21','10','6'], parseInt))

// parseInt(21, 0, arr)
console.log(fp.map(parseInt, ['21','10','6']))


