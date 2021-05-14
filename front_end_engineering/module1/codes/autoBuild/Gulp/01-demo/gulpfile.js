// gulp 的入口文件

// 推荐使用函数导出的方法
exports.foo = done => {
  console.log('hello gulp===>', );
  done()
}

exports.default = done => {
  console.log('default task===>', );
  done()
}


// gulp 4.0以前的写法，现在仍保留，但是不推荐
const gulp = require('gulp')
gulp.task('bar', done => {
  console.log('gulp 4.0===>', );
  done()
})




/* 
  gulp-compose-task
*/

const {series, parallel} = require('gulp')
const task1 = done => {
  setTimeout(() => {
    console.log('task1===>', );
    done()
  }, 1000)
}

const task2 = done => {
  setTimeout(() => {
    console.log('task2===>', );
    done()
  }, 1000)

}
const task3 = done => {
  setTimeout(() => {
    console.log('task3===>', );
    done()
  }, 1000)

}

exports.composeTask1 = series(task1, task2, task3) // 串行任务
exports.composeTask2 = parallel(task1, task2, task3) //并行任务
