class NormalModule {
  constructor(data) {
    this.name = data.name
    this.context = data.context
    this.moduleId = data.moduleId
    this.rawRequest = data.rawRequest
    this.parser = data.parser
    this.resource = data.resource
    this._source
    this._ast
  }

  build(compilation, callback) {
    /**
     * 1、从文件中读取到将来需要预加载的module内容、
     * 2. 如果当前不是js模块则需要loader进行处理，最终返回js模块
     * 3. 完成后就可以将js代码转化为 ast 语法树
     * 4. 当前js模块内部又引用了其他模块，因此我们需要递归完成
     * 5、 前边完成之后重复调用
     */ 
    this.doBuild(compilation, err => {
      thhis._ast = this.parser.parse(this._source)
      callback(err)
    })
  }

  doBuild(compilation, callback) {
    this.getSource(compilation, (err, source => {
      this._source = source
      callback()
    }))
  }

  getSource(compilation, callback)  {
    compilation.inputFileSystem.readFile(this.resource, 'utf-8', callback)
  }
}

module.exports = NormalModule