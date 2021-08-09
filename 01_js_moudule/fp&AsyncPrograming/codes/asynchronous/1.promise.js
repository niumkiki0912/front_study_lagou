// promise用法
const promise = new Promise(function(resolve, reject) {
  resolve(100)
  // reject(new Error('promise rejected'))
})

// then的两个参数， onFulfilled(), onRejected()
// promise.then(function onFulfilled(value) {
//   console.log('value===>', value);
// }  ,function onRejected(err) {
//   console.log('onRejected===>', err);
// })
// console.log('end');






// promise-ajax
function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    // this.for()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function() {
      if(this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    xhr.send()
  }) 
}
// ajax('/api/users111.json').then(res => {
//   console.log('res===>', res);
// }, err => {
//   console.log('err===>', err);
// })








//链式调用
// const promise1 = ajax('/api/users.json')
// promise1.then(res => {
//   console.log(111);
//   // 在then中可以手动返回一个promise对象
//   return ajax('/api/urls.json')
// }).then(res => {
//   console.log(222, res);
// }).then(res => {
//   console.log(333);
// }).then(res => {
//   console.log(444);
//   return '232'
// }).then(res => {
//   console.log(555, res);
// })









// 异常处理
// const promise2 = promise1.then(function onFulfilled(value) {
//   console.log('value===>', value);
//   return ajax('/api/users222.json')
// }, function onRejected(err) {
//   console.log('err===>', err);
// }) 
// 页面报错：Uncaught (in promise) Error: Not Found
//     at XMLHttpRequest.xhr.onload (1.promise.js:31)


// const promise3 = promise1.then(function onFulfilled(value) {
//   console.log('value===>', value);
// }).then(undefined, (err) => {
//   console.log('err===>', err); //err===> Error: Not Found at XMLHttpRequest.xhr.onload (1.promise.js:31)
//   return ajax('/api/users222.json')
// }).then(undefined, (err) => {
//   console.log('err===>', err); //没有捕获到抓取到异常
// })


// catch
// const promise4 = promise1.then(function onFulfilled(value) {
//   console.log('value===>', value);
// }).then(undefined, (err) => {
//   console.log('err===>', err); //err===> Error: Not Found at XMLHttpRequest.xhr.onload (1.promise.js:31)
//   return ajax('/api/users222.json')
// }).catch(err => {
//   console.log('catch===>', err);  
//   // catch===> Error: Not Found at XMLHttpRequest.xhr.onload (1.promise.js:31)
// })











// Promise.resolve()    把一个值快速转为promise对象
Promise.resolve('foo')
  .then(res => {
    console.log('res===>', res);
  })


// 等价于
new Promise((resolve) => {
  resolve('foo')
}).then(res => {
  console.log('res===>', res);
})

const promise1 = ajax('/api/users.json')
const promise2 = Promise.resolve(promise1)
// 用Promise.resolve()去包装一个promise对象，得到的就是这个promise对象
console.log(promise1 === promise2);  // true




// Promise.rejected
Promise.reject('报错了')
  .then(res => {
    console.log('res===>', res);
  }, err => {
    console.log('err===>', err); // err ===> 报错了
  })



// Promise.all()
const promiseAll = Promise.all([
  ajax('/api/users.json'),
  ajax('/api/urls.json'),
  ajax('/api/posts.json')
])

promiseAll.then(res => {
  // res为一个数组，包含每个异步任务的结果，所有任务都结束才会结束； 只要有一个失败，就会以失败结束
  console.log('res===>', res);
})


ajax('/api/urls.json').then(res => {
  const urls = Object.values(res)
  const tasks = urls.map( url => ajax(url))
  return Promise.all(tasks)
}).then(value => {
  console.log('value===>', value);
})






// Promise.race()   只要有一个任务完成，这个所返回的新promise对象就会完成
const request = ajax('/api/posts.json')
const timeout = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject(new Error('timeout'))
  }, 300)
})

Promise.race([request, timeout])
  .then(res => {
    console.log('res===>', res);
  })
  .catch(err => {
    console.log('err===>', err);
    
  })