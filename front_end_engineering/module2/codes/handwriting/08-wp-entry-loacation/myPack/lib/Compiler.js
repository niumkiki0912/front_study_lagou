const { Tapable, AsyncSeriesHook, AsyncSeriesBailHook } = require('tapable')
const Stats = require('./stats')
const path = require('path')
const mkdirp = require('mkdirp')

class Compiler  extends Tapable {
  constructor(context) {
    super()
    this.context = context
    this.hoosk = {
      done: new AsyncSeriesHook(['stats']),
      afterCompile: new AsyncSeriesHook(['compilation']),
      emit: new AsyncSeriesHook(['compilation'])
    }
  }
  emitAssets(compilation, callback) {
    // 当前需要做的核心: 01 创建dist  02 在目录创建完成之后执行文件的写操作
    // 01 定义一个方法用于执行文件的生成操作
    const emitFiles = err => {
      const assets = compilation.assets
      let outputPath = this.options.output.path
      for(let file in assets) {
        let source = assets[file]
        let targetPath = path.posix.join(outputPath, file)
        this.outputFileSystem.writeFileSync(targetPath, source, 'utf-8')
      }
      callback(err)
    }

    // 创建目录之后启动文件写入
    this.hoosk.emit.callAsync(compilation,  err => {
      mkdirp.sync(this.options.output.path)
      emitFiles()
    })
  }
  run(callback) {
    const onCompiled = (err, compilation) => {
      this.emitAssets(compilation, err => {
        let stats = new Stats(compilation)
        finallyCallback(err, stats)
      })
    }
    callback(null, {
      toJson() {
        return {
          entries: [], // 当前次打包的入口信息
          chunks: [], // 当前次打包的chunk信息
          modules: [], // 模块信息
          assets: [], // 当前次打包最终生成的资源

        }
      }
    })
  }
}

module.exports  =  Compiler