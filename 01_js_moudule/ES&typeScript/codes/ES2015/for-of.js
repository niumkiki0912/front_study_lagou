const arr = [1,2,3,4,5]


// for of 循环可以替代数组的forEach方法，可以用break停止循环
// forEach 不能跳出循环，必须使用some或every
for(const i of arr) {
  console.log(i)
  if(i > 2) {
    break
  }
}


// 遍历set, 与遍历数组一样
const s = new Set(arr)
for(const i of s) {
  console.log(i);
}


// 遍历map, 可以配合数组语法
const m = new Map()
m.set('foo', 123)
m.set('bar', 456)
console.log('m===>', m);

for(const [key, value] of m) {
  console.log('key===>', key,value);
}




const obj = {a: 1, b: 2}
for(let i of obj) {
  console.log('i===>', i);
  
}
// TypeError: obj is not iterable