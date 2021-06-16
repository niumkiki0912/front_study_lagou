// 导入模块成员
// import { log } from './logger'
// import messages from './messages'
// import _ from 'lodash-es'

// // 使用模块成员
// const msg = messages.hi

// log(msg)
// log(_.camelCase('hello world'))
// log(cjs)



// Error: UMD and IIFE output formats are not supported for code-splitting builds.
import('./logger').then(({log}) => {
  log('code splitting')
})
