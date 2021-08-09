export {}
function createNumberArray (length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value)
  return arr
}

// 这样会造成冗余
function createStringArray (length: number, value: string): string[] {
  const arr = Array<string>(length).fill(value)
  return arr
}


const res = createNumberArray(5, 5) // [5,5,5,5,5]
const res1 = createStringArray(5, 's')


// 泛型，定义时把不明确的类型作为一个参数，使用时再去传递
function createArray<T> (length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

const res2 = createArray<number>(3,3)