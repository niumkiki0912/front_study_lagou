const _ = require('lodash')


function getArea(r) {
  console.log('r===>', r);
  
  return Math.PI * r * r
}


function memoize(fn) {
  const cache = {}
  return function() {
    const key = JSON.stringify(arguments)
    return cache[key] = cache[key] || fn.apply(this, arguments)
  }
}

const getAreaWithMemory = memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))