const {  Tapable, SyncHook  }  = require('Tapable')
const NormalModuleFactory = require('./NormalModuleFactory')
const Parser = require('./Parser')
const path = require('path')
const Chunk = require('./Chunk')
const ejs = require('ejs')

// 实例化
const normalModuleFactory = new NormalModuleFactory
const parser = new Parser()

class Compilation extends Tapable  {
  constructor(compiler) {
    super()

    this.compiler = compiler
    this.context = compiler.context
    this.options = compiler.options
    // Compilation 具备文件读写能力
    this.inputFileSystem = compiler.inputFileSystem
    this.outputFileSystem = compiler.outputFileSystem

    this.entries = [] // 存放所有入口模块的数组
    this.modules = [] // 存放所有模块的数据
    this.chunks = [] // 存放所有chunk
    this.assets = []
    this.files = []

    this.hooks = {
      succeedModule: new SyncHook([module]),
      seal: new SyncHook(),
      beforeChunks: new SyncHook(),
      afterChunks: new SyncHook()
    }
  }

  /**
   * @name: niumkiki
   * @msg: 
   * @param {*} context 当前项目的跟
   * @param {*} entry 当前入口相对路径
   * @param {*} name chunkName main
   * @param {*} callback 回调
   * @return {*}
   */  
  addEntry(context, entry, name, callback) {
    this._addModuleChain(context, entry, name, (err, module) => {
      callback(err, module)
    })
  }

  _addModuleChain(context, entry, name, callback) {
    let entryModule =  NormalModuleFactory.create({
      name,
      context,
      rawRequest: entry,
      resource: Path.posix.join(context, entry)，
      parser
    })

    const afterBuild = function(err) {
      callback(err, entryModule)
    }
    this.buildModule(entryModule,  afterBuild)

    // 当我们完成本次build之后，保存module
    this.entries.push(entryModule)
    this.modules.push(entryModule)
  }

  /**
   * @name: niumkiki
   * @msg: 完成具体的build行为
   * @param {*} module 当前需要被编译的模块
   * @param {*} callback
   * @return {*}
   */  
  buildModule(module, callback) {
    module.build(this, (err) => {
      // 走到这里代表，当前Module的编译完成了
      this.hooks.succeedModule.call(module)
      callback(err)
    })
  }

  seal(callback) {
    this.hooks.seal.call()
    this.hooks.beforeChunks.call()
    
    for (const entryModule of this.entries) {
      const chunk =  new Chunk(entryModule)

      this.chunks.push(chuk)
    }

    // chunk 流程疏通之后就进入到chunk代码处理环节
    this.hooks.afterChunks.call(this.chunks)

    // 生成代码内容
    this.createChunkAssets()
    callback()
  }

  createChunkAssets() {
    for(let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i]
      const fileName = chunk.name + '.js'
      chunk.files.push(fileName)

      // 1. 获取模板文件路径
      let tempPath = path.posix.join(__dirname, 'temp/main.ejs')
      // 2. 读取文件内容
      let tempCode = this.inputFileSystem.readFileSync(tempPath， 'utf-8')

      // 3. 获取渲染函数
      let tempRender = ejs.compile(tempCode)
      let source = tempRender({
        entryModuleId: chunk.entryModule.moduleId,
        modules: chunk.modules
      })
      
      // 输出文件
      this.emitAssets(fileName, source)
    }
  }
  emitAssets(fileName, source) {
    this.assets[fileName] = source
    this.files.push(fileName)
  }
}

module.exports = Compilation