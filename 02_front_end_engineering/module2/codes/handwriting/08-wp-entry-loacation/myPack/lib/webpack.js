const Compiler = require('./Compiler')
const NodeEnvironmentPlugin = require('./node/NodeEnvironmentPlugin')

const webpack = fucntion(options) {
  // 校验options  -- 手写忽略

  // 实例化compiler对象
  let compiler = new Compiler(options.context)
  compiler.options = options

  // 初始化 NodeEnviromentPlugin(让compiler具有文件读写能力)
  new NodeEnvironmentPlugin().apply(compiler)


  // 挂载所有的plugins插件至 compiler 对象身上
  if(options.plugins  &&  Array.isArray(options.plugins)) {
    for(const plugin of options.plugins) {
      plugin.apply(compiler)
    }
  }

  // 挂载所有webpack所有内置的插件(处理入口文件)
  compiler.options = new WebpackOptionsApply().process(options, compiler);

  // 返回compiler 对象
  return compiler

}

module.exports = webpack