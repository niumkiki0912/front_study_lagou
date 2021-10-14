class Observer {
  constructor(data) {
    this.walk(data)
  }

  walk(data) {
    console.log('walk===>', data);
    if(!data || typeof data !== 'object') return
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key,  data[key])
    })
  }

  defineReactive(data, key, val ){
    // 收集依赖
    let dep = new Dep()

    // 如果val是对象, 把内部的属性转化为响应式对象
    this.walk(val)

    // 将this复制到that
    const that = this
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get ()  {
        Dep.target && dep.addSub(Dep.target)
        return val
      },
      set (newVal) {
        if(newVal === val) return
        
        val = newVal

        that.walk(val)

        dep.notify()
      }
    })
  }
}