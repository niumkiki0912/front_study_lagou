const fs = require('fs')
const { task } = require('folktale/concurrency/task')
const { split, find } = require('lodash/fp')


// 读取文件
const readFile = (fileName) => {
  return task(resolver => {
    return fs.readFile(fileName, 'utf-8', (err, data) => {
      if(err)  resolver.reject(err)
      resolver.resolve(data)
    })
  })
}


readFile('package.json')
  .map(split('\n'))
  .map(find(v => v.includes('version')))
  .run()
  .listen({
    onRejected: err => {
      console.log('err===>', err);
    },
    onResolved: data => {
      console.log('data===>', data);
    }
  })