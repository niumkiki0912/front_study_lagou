// object类型
export {}

const foo :object = function(){} //{} //[]    //不单指对象类型

const obj: { foo: number, bar: string } = { foo:1,  bar: 'str' }







// 数组类型
const arr1: Array<number> = [1,2,3,4,5]

const arr2: number[] = [1,2,3,4,5]

// 例如
function sum(...args: Array<number>) {
  return args.reduce((pre,curr) => pre + curr, 0)
}

sum(1,2,3,4,5) // 当传入字符串时，会报错。这样就可以更简单的进行类型判断





// 元祖类型
const tuple: [string, number] = ['job', 18]
// tuple[0]

const [name, age] = tuple
console.log('===>', name);
console.log('===>', age);


// 应用: react-useState
Object.entries({
  foo: 'foo',
  bar: 'bar'
})




// 枚举类型（枚举的值会影响编译后的结果， 可以动态的根据索引器的方式访问枚举）

// const postStatus = {
//   draft: 0,
//   unPublished: 1,
//   Published: 2
// }


// 数字枚举的话后边的值可以不指定，默认会在第一个值后边累加；字符串必须要指定值
// enum postStatus {
//   draft = 0,
//   unPublished = 1,
//   Published = 2
// }

// 常量枚举
const enum postStatus {
  draft = 0,
  unPublished = 1,
  Published = 2
}

const post =  {
  title: 'title',
  status: 3
}












// 函数类型
function fun1(name: string, b?: number, ...rest:[]): string {
  return 'fun1'
}

fun1('111', 1)
fun1('111')


const fun2: (name: string, b?: number) => string = function(name: string, b?: number, ...rest:[]): string {
  return 'fun1'
}