// const person = {
//   name: 'tom',
//   age: 18
// }


// const personProxy = new Proxy(person, {
//   get(target, property) {
//     console.log('get',target, property)
//     return target[property] ? target[property] : 'default'
//   },
//   set(target, property, value) {
//     if(property === 'age') {
//       if(!Number.isInteger(value)) {
//         throw new TypeError(`${value} is not an in`)
//       }
//     }
//     target[property] = value
//     console.log('set', target, property, value)
//   },
// })

// personProxy.name
// personProxy.name = 'jerry'
// personProxy.age = 20

// personProxy.gender = '女'










// Proxy 对比 Object.defineProperty() ===============

// 1. proxy可以监视读写以外的操作
// const person = {
//   name: 'tom',
//   age: 18
// }


// const personProxy = new Proxy(person, {
//   deleteProperty(target, property) {
//     console.log(target, property)
//     delete target[property]
//   }
// })

// delete personProxy.age
// console.log('person===>', person);



// 2. proxy可以方便数组操作
// const list = []

// const listProxy = new Proxy(list, {
//   set(target, property, value) {
//     console.log('===>', target, property, value);
//     target[property] = value
//     return true
//   }
// })
    
// listProxy.push(1)
// listProxy.push(100)





// 3.proxy 不需要侵入对象
const person = {
}

Object.defineProperty(person, 'name', {
  get() {
    console.log('name被访问===>', );
    return person._name
  },

  set(value) {
    console.log('value===>', value);
    
    person._name = value
  }
})


Object.defineProperty(person, 'age', {
  get() {
    console.log('age被访问===>', );
    return person._age
  },

  set(value) {
    person._age = value
  }
})

person.name = 'jack'
console.log('===>', person.name);


// const person2 = {
//   name: 'eee',
//   age: 20
// }

// const personProxy = new Proxy(person2, {
//   get (target, property) {
//     console.log('get', property)
//     return target[property]
//   },
//   set (target, property, value) {
//     console.log('set', property, value)
//     target[property] = value
//   }
// })

// personProxy.name = 'jack'
// console.log('===>', personProxy.name);
