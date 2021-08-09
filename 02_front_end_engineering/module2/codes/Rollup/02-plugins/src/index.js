// 导入模块成员
import { log } from './logger'
import messages from './messages'
import _ from 'lodash-es'
import {version, name} from '../package.json'
import cjs from './cjs-module'

// 使用模块成员
const msg = messages.hi
console.log('===>', version);
console.log('===>', name);

log(msg)
log(_.camelCase('hello world'))
log(cjs)
