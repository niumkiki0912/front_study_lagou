const PENDING = 'pending'
const FULFILLEd = 'fulfilled'
const REJECTEd = 'rejected'

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject) 
    } catch (error) {
      this.reject(error)
    }
  }
  status = PENDING

  value = null

  reason = null

  // 成功回调
  successCallbacks = [] 

  // 失败回调
  failCallbacks = [] 
  
  resolve = (value) => {
    // 如果状态不是等待，阻止程序向下执行
    if(this.status !== PENDING) return
    this.status = FULFILLEd
    this.value = value
    // this.successCallbacks && this.successCallbacks(value)
    while(this.successCallbacks.length) this.successCallbacks.shift()()
  }

  reject = reason => {
    if(this.status !== PENDING) return
    this.status = REJECTEd
    this.reason = reason
    // this.failCallbacks && this.failCallbacks(reason)
    while(this.failCallbacks.length) this.failCallbacks.shift()()

  }


  then(successCallback, failCallback) {
    successCallback = successCallback? successCallback : value => value
    failCallback = failCallback? failCallback : reason => {throw reason}
    let promise2 = new MyPromise((resolve, reject) => {

      if(this.status === FULFILLEd) {
        setTimeout(() => {
          try {
            let x = successCallback(this.value)
            resolvePromise(promise2,x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0 )
      } else if(this.status === REJECTEd) {
        setTimeout(() => {
          try {
            let x = failCallback(this.reason)
            resolvePromise(promise2,x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0 )
      } else {
        this.successCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value)
              resolvePromise(promise2,x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0 )
        })
        this.failCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = failCallback(this.reason)
              resolvePromise(promise2,x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0 )
        })
      }
    })
    return promise2
  }


  finally(callback) {
    return this.then(value => {
      return MyPromise.resolve(callback()).then(() => value)
    }, reason => {
      return MyPromise.resolve(callback()).then(() => {throw reason})

    })
  }


  catch(failCallback) {
    return this.then(undefined, failCallback)
  }


  static all(array) {
    let results = []
    let index = 0
    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        results[key] = value
        index++
        if(index === array.length) {
          resolve(results)
        }
      }
      for(let i = 0 ; i < array.length; i++) {
        let current = array[i]

        if(current instanceof MyPromise) {
          current.then(value => {addData(i, value)}, reason => reject(reason))
        } else {
          addData(i, current)
        }
      }
    })
  }

  static resolve(value) {
    if(value instanceof MyPromise) {
      return value
    } else {
      return new MyPromise((resolve) => {
        resolve(value)
      })
    }
  }


  

  
}


// 判断 x 的值是普通值还是promise对象
// 如果是普通值 直接调用resolve 
// 如果是promise对象 查看promsie对象返回的结果 
// 再根据promise对象返回的结果 决定调用resolve 还是调用reject
function resolvePromise(promise2,x, resolve, reject) {
  if(promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if(x instanceof MyPromise) {
    // x.then(value => resolve(value), reason => reject(reason))
    x.then(resolve, reject)
  } else {
    return resolve(x)
  }
}


module.exports = MyPromise