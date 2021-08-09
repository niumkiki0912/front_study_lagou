exports.callback = done => {
  console.log('callback')
  done()
} 

exports.callback_err = done => {
  console.log('callback_err===>', );
  done(new Error('taks fail'))
}


exports.promise = done => {
  console.log('promise task===>', );
  return Promise.resolve()
}

exports.promise_err = done => {
  console.log('promise task===>', );
  return Promise.reject(new Error('promise task fail'))
}



const  timeout =  time => {
 return new Promise((resolve) => {
    setTimeout(resolve, time)
 })
}
exports.async = async done => {
  await timeout(1000)
  console.log('async tasl');
}



const fs = require('fs')
// stream
// exports.stream = done => {
//   const readStream = fs.createReadStream('package.json')
//   const writeStream = fs.createWriteStream('text.txt')
//   readStream.pipe(writeStream)
//   return readStream
// }

exports.stream = done => {
  const readStream = fs.createReadStream('package.json')
  const writeStream = fs.createWriteStream('text.txt')
  readStream.pipe(writeStream)
  readStream.on('end', () => {
    done()
  })
}