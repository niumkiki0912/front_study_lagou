// @flow


// function sum(a: number, b: number) {
//   return a + b
// }

// sum(100, 100)
// sum(100, '100')






// 类型推断
// function square(n) {
//   return n * n
// }

// square('100')








/**
 * 
 * 类型注解
 */

// 变量注解
let number: number = 100
number  = '100' // 报出类型错误

// 函数返回值()
function foo(): number {
  // return 100
  return '100'
}

// 注意：没有返回值 === return undefined 所以也会报错,   所以没有返回值时，需要用到void
function foo(): void {
  // return 100
  // return '100'
}






/***
 * 原始类型
 */
let a: string = 'string' // 字符串
let b: number = Infinity // NaN, Infinity, 100
let c: boolean = true // false
let d: null = null // null
let e: void = undefined // 特殊情况: undefined 用 void 





/***
 * 数组类型
 */

 const arr : Array<number> = [1,2,3, 'foo']
 const arr1: number[] = [1,2,3, 'foo']
 const arr2 : [string, number] = ['foo', 1]




 /***
 * 对象类型
 */

 const obj1 : {foo: string, bar: number} = {foo: '1', bar: 100}
 const obj2 : {foo?: string, bar: number} = { bar: 100}
 const obj3 : {[string]: string} = {}

 obj3.key1 = '111'
 obj3.key2 = '333'






/***
 * 函数类型
 */
function bar(callback: (string, number) => void) {
  callback('111', 100)
}

bar(function(str, n) {
  console.log(str, n)
})




/**
 * 
 * 特殊类型
 */

const n: 'foo' = 'foo'
const type: 'success' | 'err' | 'danger' = 'success'


type stringOrNumber = string | number
const f: stringOrNumber = 222

// maybe类型
const gender : ?number = undefined
// 相当于
const gender1 : number | null | void = 1




/**
 * 
 * mixed类型和any类型， 作用：兼容老代码
 */

function passMixed(value: mixed) {
  if(typeof value === 'string') {
    value.toString()
  } 
  if(typeof value === 'number') {
    value * value 
  }
}


function passAny(value: any) {
  let result
  result = value.toString()
  result = value * value

  return result
}
console.log(passAny('string'))




/**
 * 
 * 运行环境api   内置对象
 */

const element: HTMLElement | null = document.getElementById('app')