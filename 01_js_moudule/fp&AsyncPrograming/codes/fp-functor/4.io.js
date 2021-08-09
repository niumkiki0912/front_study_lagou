const fp = require('lodash/fp')

class IO {
  static of(value) {
    return new IO(function() {
      return value
    })
  }
  constructor(fn) {
    this._value = fn
  }

  map(fn) {
    // 此时返回的是new 一个构造函数， 将当前的_value和传入的fn组合成一个新函数，并作为新的_value
    return  new IO(fp.flowRight(fn, this._value))
  }
}

let r = IO.of(process)
          .map(p => p.execPath)
console.log('===>', r._value());









// io的问题： 遇到多个函子的情况，就会出现嵌套, 此时可以用 monad
const readFile = (fileName) => {
  return new IO(() => {
    return fs.readFileSync(fileName, 'utf-8')
  })
}


const print = (val) => {
  return new IO(() => {
    console.log('print',val)
    return val
  })
}


// IO(io(val))
const cat = fp.flowRight(print, readFile)

const r = cat('package.json')._value()._value()
console.log('r===>', r);


