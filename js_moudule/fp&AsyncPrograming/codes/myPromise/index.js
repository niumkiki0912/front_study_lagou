/**
 * promise 是一个类， 在执行这个类的时候会传入一个执行器，执行器会立即执行
 * 
 * promise有三个状态 pending等待   fulfilled成功   rejeted失败
 *     pending ---》 fulfilled
 *     pending ---》 rejeted
 *     一旦状态更改就不可以再改变
 *        
 * resolve 和 reject 是用来改变状态的
 *     resolve：将状态改为fulfilled
 *     reject： 将状态改为rejeted
 * 
 * 
 * then方法会传入两个回调，内部做判断 ，如果状态成功，调用成功的回调函数；如果状态是失败，调用失败的回调函数，then方法是被定义在原型上的
 *      成功的回调函数有一个参数，表示成功之后的值； 失败的回调函数有一个参数，表示失败之后的原因；
 * 
 */


const myPromise = require('./myPromise')





const promise = new myPromise((resolve, reject) => {
  // // 异步情况
  // setTimeout(() => {
  //   resolve('成功...')
  // },2000)
  // throw new Error('executor err')
  resolve('成功')

  // reject('失败')
})



// then里边返回promise
// function other() {
//   return new myPromise((resolve, reject) => {
//     resolve('other')
//   })
// }
// promise.then(value => {
//   console.log('value===>', value);
//   return other()
// }).then(value => {
//   console.log('value2===>', value);
// })






// 如果then方法返回的是自己的promise对象，则会发生promise的嵌套，这个时候程序会报错
// const p1 = promise.then(value => {
//   console.log('value===>', value);
//   return p1
// })

// p1.then(res => {
//   console.log('value===>', value);
// }, err => {
//   console.log('err===>', err.message); // Chaining cycle detected for promise #<Promise>
// })




// 捕获异常try-catch
// promise.then(value => {
//   console.log('value===>', value);
//   return 111
//   // throw new Error('then err')
// },reason => {
//   console.log('===>', reason);
//   // throw new Error('reject  err')
//   return 1000
// }).then(value => {
//   console.log('value===>', value);
// }, err => {
//   console.log('err===>', err);
  
// })





// then的参数
// promise.then().then().then(res=> {
//   console.log('ew===>', res);
  
// })








// promise.then(value => {
//   console.log('value===>', value);
// }, err => {
//   console.log('err===>', err);
// })


// promise.then(value => {
//   console.log('value===>', value);
// }, err => {
//   console.log('err===>', err);
// })







// promise.all
function p1 () {
  return new myPromise((resolve,reject) => {
    setTimeout(() => {
      resolve('p1')
    }, 2000)
  })
}


function p2 () {
  return new myPromise((resolve,reject) => {
      resolve('p2')
  })
}


// myPromise.all(['1','2',p1(), p2(), '3'])
//   .then(res=> {
//     console.log('===>',res ); // 1, 2, p1, p2, 3
    
//   })





// resolve方法
// myPromise.resolve(100).then(value => {
//   console.log('===>', value);
// })
// myPromise.resolve(p1()).then(value => {
//   console.log('===>', value); 
// })

// finally方法
// p2().finally(() => {
//   console.log('finally===>', );
//   return p1()
// }).then(res => {
//   console.log('value===>', res);
// })



// catch方法
promise.then(res=> {
  console.log('res===>', res);
  throw new Error('then err')
}).catch(err => {
  console.log('err===>', err);
})
