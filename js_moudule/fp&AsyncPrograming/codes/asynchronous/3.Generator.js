function * foo() {
  console.log('start===>', );

  try {
    const res = yield 'foo'
    console.log('res===>', res);
  } catch (error) {
    console.log('===>', error);
  }
}

const generator = foo()

const result = generator.next()
console.log('result===>', result);

// generator.next('bar')
generator.throw(new Error('generator error'))





// 更优的异步编程体验
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

function * main() {
  const users =  yield ajax('/api/users.json')
  console.log('result===>', users);
  
  const posts = yield ajax('/api/posts.json')
  console.log('posts===>', posts);
  
}


const g = main()
const r = g.next()
console.log('r===>', r);
// 多次返回promise对象
if(r.done) return
r.value.then(data => {
  const res = g.next(data)
  console.log('res===>', res);
  if(res.done) return
  res.value.then(data => {
    const res = g.next(data)
    console.log('res3===>', res);
  })
})



