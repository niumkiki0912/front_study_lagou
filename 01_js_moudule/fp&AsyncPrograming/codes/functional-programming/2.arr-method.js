const arr = [2,2,34,5]

// 模拟数组的方法
// 高阶函数---函数作为参数

function forEach(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    fn(arr[i])
  }
}
// forEach(arr, function(item) {
//   console.log('item===>', item);
// })



function filter(arr, fn) {
  const results = []
  for(let i = 0; i < arr.length; i++) {
    fn(arr[i]) && results.push(arr[i])
  }
  return results
}
// const result = filter(arr, function(item) {
//   return item % 2 === 0
// })
// console.log('result===>', result);



const map = (arr, fn) => {
  const results = []
  for(let value of arr) {
    results.push(fn(value))
  }
  return results
} 
// const result = map(arr, item => item * 2)
// console.log('result===>', result);



const every = (arr, fn) => {
  let result = true
  for(let value of arr) {
    result = fn(value)
    if(!result) break
  }
  return result
} 
// console.log(every(arr, v => v > 1))



const some = (arr, fn) => {
  let result = false
  for(let value of arr) {
    result = fn(value)
    if(result) {
      break
    }
  }
  return result
}
console.log(some(arr, v => v > 1))


