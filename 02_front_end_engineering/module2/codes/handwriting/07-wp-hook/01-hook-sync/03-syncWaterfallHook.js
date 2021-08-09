const {SyncWaterfallHook} = require('tapable')

const hook = new SyncWaterfallHook(['name','age'])

hook.tap('fn1', function(name, age){
  console.log('fn1===>', name, age)
  return 'res1'
})

hook.tap('fn2', function(name, age){
  console.log('fn2===>', name, age)
  return 'res2'

})

hook.tap('fn3', function(name, age){
  console.log('fn3===>', name, age)
  return 'res3'

})

hook.call('nmk', 11)