/* 声明一个define函数： 
    参数1 是模块名字；
    参数2 是一个数组，用于生命依赖项；
    参数3是一个函数，它的参数和前边的依赖项一一对应，每一项为依赖项这个模块导出的成员； 作用：为当前模块提供私有空间
*/ 
define('module1', ['jquery', './module2'], function($, module2) {
  // 通过return 导出成员
  return {
    start : function() {
      $('body').animation({margin: '20px'})
      module2()
    }
  }
})