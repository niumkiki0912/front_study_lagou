(function (modules) {
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

  // 09 定义p方法用于存放资源访问路径
  __webpack_require__.p = ''


  // 10 调用
  return __webpack_require__(__webpack_require__.s = './src/index.js')
})({

  // "./src/index.js": (function (module, exports, __webpack_require__) {
  //   const name = __webpack_require__( /*! ./login */ "./src/login.js");
  //   console.log("name===>", name);
  //   module.exports = "入口文件导出内容";
  // }),

  // "./src/login.js": (function (module, exports) {
  //   module.exports = "拉勾教育";
  // })


  // "./src/index.js":
  // (function(module, __webpack_exports__, __webpack_require__) {
  //   "use strict";
  //   __webpack_require__.r(__webpack_exports__);
  //   /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/login.js");
  //   /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login__WEBPACK_IMPORTED_MODULE_0__);
  //   // const name = require("./login");
  //   console.log("import===>", _login__WEBPACK_IMPORTED_MODULE_0___default.a);
  //   // module.exports = "入口文件导出内容";
  // }),

  // "./src/login.js":
  // (function(module, exports) {
  //   module.exports = "拉勾教育";
  // })



  {
    "./src/index.js":
    (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/login.js");
      // const name = require("./login");
      // import name from './login'
      console.log("import===>", _login__WEBPACK_IMPORTED_MODULE_0__["default"]);
      // module.exports = "入口文件导出内容";
      }),
  
    "./src/login.js":
    (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      // module.exports = "拉勾教育";
      /* harmony default export */ __webpack_exports__["default"] = ({
        name: 'hhhh'
      });
    })
  }

})