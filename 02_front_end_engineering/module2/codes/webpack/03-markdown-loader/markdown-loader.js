const marked = require('marked')

module.exports = source => {
  // 输入： 资源文件的内容
  // 输出: 加工之后的结果
  const html = marked(source)

  // return `module.exports = ${JSON.stringify(html)}`
  // return `export default ${JSON.stringify(html)}`

  // 返回 html 字符串交给下一个 loader 处理
  return html
}