console.log('start===>');

setTimeout(() => {
  console.log('setTimeout===>');
},0)

Promise.resolve()
  .then(() => {
    console.log('promise1===>');
  })
  .then(() => {
    console.log('promise2===>');
  })

console.log('end===>');

// start, end,  promise1, promise2, setTimeout
// 微任务： 在本轮调用结束后去执行，提高应用的响应能力 ---- Promise, MutationObserver, process.nextTick(node里边的)