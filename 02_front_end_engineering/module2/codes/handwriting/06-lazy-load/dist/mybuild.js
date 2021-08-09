(function (modules) {
  // 14. 定义webpackJsonpCallback
  // 合并模块定义， 改变promise状态执行后续行为
  function webpackJsonpCallback(data) {
    let chunkIds = data[0]
    let moreMudles = data[1]

    let chunkId = ''
    let resolves = []

    for(let i = 0; i < chunkIds.length; i++ ) {
      chunkId = chunkIds[i]
      if(Object.prototype.hasOwnProperty.call(inStalledChunks, chunkId) && inStalledChunks[chunkId]) {
        resolves.push(inStalledChunks[chunkId][0])
      }
      // 更新当前chunk状态, 0为已加载
      inStalledChunks[chunkId] = 0
    }

    for(moduleId in moreMudles) {
      if(Object.prototype.hasOwnProperty.call(moreMudles, moduleId) ) {
        modules[moduleId] = moreMudles[moduleId]
      } 
    }

    while(resolves) {
      resolves.shift()()
    }
  }

  // 15. 定义一个对象，用于表示某个chunkId标识的chunk 是否完成了加载
  let inStalledChunks = {
    main: 0
  }

  // 01. 用于缓存加载过的模块
  let installModules = {}

  // 02. 定义一个_webpack_require 的方法来替换import require 加载操作
  function __webpack_require__(moduleId) {
    // 2-1 如果有缓存的话，执行缓存
    if(installModules[moduleId]) {
      return installModules[moduleId].exports
    }

    // 如果不存在则定义对象
    let module = installModules[moduleId] = {
      i:moduleId,
      l: false,
      exports: {}
    }

    // 调用当前module中对应的函数
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)

    module.l = true

    return module.exports
  }

  // 03. 定义m属性用于保存modules
  __webpack_require__.m = modules
  
  // 04 定义c属性保存缓存
  __webpack_require__.c = installModules

  // 05 定义 o 方法判断对象身上是否存在指定的属性
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty(object, property)
  }

  // 06 定义 d 方法用于在对象身上添加指定的属性，同时给该属性提供一个getter
  __webpack_require__.d = function(exports, name, getter) {
    if(!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
    }
  }

  // 07 定义r 方法用于表示当前模块是es6类型
  __webpack_require__.r = function(exports) {
    if(typeof Symboy !== undefined && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'})
    } else {
      Object.defineProperty(exports, '__esModule',  {value: true})
    }
  }

  // 08 定义n方法用于设置具体的getter --- 这个不是特别明白它的作用
  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ? 
      function getDefault() {return module['default']}:
      function getModuleExports() {return module}
    __webpack_require__.d(getter, 'a', getter)
    return getter
  }


  // 17. 定义jsonpScriptSrc方法
  jsonpScriptSrc(chunkId) {
    return __webpack_require__.p + '' + chunkId + '.built.js'
  }


  // 16. 定义e方法: 用于实现jsonp来加载内容； 用promise来实现异步加载操作
  __webpack_require__.e = function(chunkId) {
    // 定义一个数组用于存放promise
    let promises = []
    
    // 获取chunkId对应的 chunk 是否已加载
    let installedChunkData = inStalledChunks[chunkId]

    if(installedChunkData !== 0) {
      if(installedChunkData) {
        promises.push(installedChunkData[2])
      } else {
        let promise = new Promise((resolve, reject) => {
          installedChunkData = inStalledChunks[chunkId] = [resolve, reject]
        })

        promises.push(installedChunkData[2] = promise)
      }
      
      // 创建scrpt标签
      const script = document.createElement('scripy')
      script.src = jsonpScriptSrc(chunkId)

      document.head.appendChild(script)
    }

    Promise.all(promises)
  }


  // 09 定义p方法用于存放资源访问路径
  __webpack_require__.p = ''

  // 11. 定义变量存放数组
  let jsonpArray = window['webpackJsonP'] = window['webpackJsonP'] || []

  // 12. 保存原生的push方法
  let oldJsonpFunction = jsonpArray.push.bind(jsonpArray)

  // 13.  重写push 方法
  jsonpArray.push = webpackJsonpCallback

  // 10 调用
  return __webpack_require__(__webpack_require__.s = './src/index.js')
})
({

  "./src/index.js":
  (function(module, exports, __webpack_require__) {
    let oBtn = document.getElementById('btn')
    oBtn.addEventListener('click', function() {
      __webpack_require__.e(/*! import() | login */ "login").then(__webpack_require__.t.bind(null, /*! ./login.js */ "./src/login.js", 7)).then(login => {
        console.log('login===>', login);
        
      })
    })
    console.log('index===>');
  })
});