// gulp构建流程， 压缩css
// const fs = require('fs')
// const {Transform} = require('stream')
// exports.default = done => {
//   const readStream = fs.createReadStream('normalize.css')
//   const writeStream = fs.createWriteStream('normalize.min.css')

//   const transform = new Transform({
//     transform: (chunk, encoding, callback) => {
//       // chunk 读取到的文件内容(Buffer)
//       const input = chunk.toString()
//       const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
//       callback(null, output)
//     }
//   })
//   readStream
//     .pipe(transform)
//     .pipe(writeStream)

//   return readStream
// }



// gul文件操作api
const {src, dest} = require('gulp')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

exports.default = () => {
  return src('src/*.css')
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}
