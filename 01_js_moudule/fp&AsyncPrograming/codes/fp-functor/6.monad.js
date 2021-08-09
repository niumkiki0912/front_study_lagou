// io的问题
const fp = require('lodash/fp')
const fs = require('fs')

class IO {
  static of(value) {
    return new IO(function() {
      return value
    })
  }
  constructor(fn) {
    this._value = fn
    console.log('===>', this._value);
    // () => {
    //   return fs.readFileSync(fileName, 'utf-8')
    // }
  }

  map(fn) {
    return  new IO(fp.flowRight(fn, this._value))
  }

  join() {
    // console.log('===>', this._value);
    return this._value()
  }

  
  flatMap(fn) {
    // console.log('fn===>', fn);
    return this.map(fn).join()
  }
}


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

/**
 *  1. readFile返回一个函子， 此时_value为一个读取文件的函数 
      () => {return fs.readFileSync(fileName, 'utf-8')}
    2. 调用flatMap，并且传入一个print方法； 
       此时，flatMap内部调用map, 将print方法和_value方法组合为一个新函数， 并返回一个新函子，里边包裹的还是一个函子(new IO(new IO()))
      _value为这个组合函数：   new IO(() => {
          // 此时这个val就是readFile读取的文件数据
          console.log('print',val)
          return val
        }   
    
    3. 调用join方法, 即调用返回的新函子内部的this._value(), 也就是调用那个组合函数， 返回的就是print的返回结果
 */
const cat = readFile('package.json') 
              .flatMap(print)
              .join()
console.log('r===>', cat);


