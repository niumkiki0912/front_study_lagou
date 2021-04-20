// 高阶函数---函数作为参数

// 高阶函数-函数作为返回值
function makeFn() {
  let msg = 'makeFn'
  return function() {
    console.log('===>', msg);
  }
}
// const fn = makeFn()
// fn()
// makeFn()()

function once(fn) {
  let done = false
  return function() {
    if(!done) {
      done = true
      return fn.apply(this, arguments)
    }
  }
}
let pay = once(function(money) {
  console.log('支付了===>', money);
  
})
pay(1)
pay(2)
pay(3)


