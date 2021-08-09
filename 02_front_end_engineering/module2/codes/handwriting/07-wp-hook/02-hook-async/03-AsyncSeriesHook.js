const { AsyncSeriesHook } = require('tapable')

const hook = new AsyncSeriesHook(['hook'])


console.time('time')
hook.tapPromise('fn1', function(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn1===>', name);
      resolve()
    },1000)
  })
})

hook.tapPromise('fn2', function(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn2===>', name);
      resolve()
    },2000)
  })
})


hook.promise('nmk').then(res => {
  console.log('回调了');
  console.timeEnd('time')
  
})