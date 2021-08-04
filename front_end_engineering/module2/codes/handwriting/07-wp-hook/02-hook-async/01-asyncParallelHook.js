const { AsyncParallelHook} = require('tapable')

const hook = new AsyncParallelHook(['hook'])


// TAP
// hook.tap('fn1', function(name) {
//   console.log('fn1===>', name);
// })

// hook.tap('fn2', function(name) {
//   console.log('fn2===>', name);
// })

// hook.callAsync('nmk', function() {
//   console.log('回调函数===>', );
// })


// tapAsync
// console.time('time')
// hook.tapAsync('fn1', function(name, callback) {
//   setTimeout(() => {
//     console.log('fn1===>', name);
//     callback()
//   }, 1000)
// })
// hook.tapAsync('fn2', function(name, callback) {
//   setTimeout(() => {
//     console.log('fn2===>', name);
//     callback()
//   }, 2000)
// })
// hook.callAsync('nmk', function() {
//   console.log('回调执行了===>', );
//   console.timeEnd('time')
// })



// tapPromise
console.time('time')
hook.tapPromise('fn1', function (name) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('fn1===>', name);
      resolve()
    }, 1000)
  })
})

hook.tapPromise('fn2', function (name) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('fn2===>', name);
      resolve()
    }, 2000)
  })
})

hook.promise('nmk').then(() => {
  console.log('end执行了===>', );
  console.timeEnd('time')
})