class Compiler {
  constructor(vm) {
    this.el = vm.$el
    this.vm = vm
    
    this.compile(this.el)
  }

  compile(el) {  
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      if(this.isTextNode(node)) {
        // 处理文本节点
        this.compileText(node)
      } else if(this.isElementNode(node)) {
        // 处理元素节点
        this.compileElement(node)
      }

      if(node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

  compileText(node) {
    let reg = /\{\{(.+?)\}\}/ 
    let value = node.textContent
    if(reg.test(value)) {
      const key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])
      new Watcher(this.vm, key, (newValue) => {
        console.log('newValue===>', newValue);
        node.textContent = newValue
      })
    }
  }

  compileElement(node) {
    Array.from(node.attributes).forEach(attr => {
      let attrName = attr.name
      if(this.isDerictive(attrName)) {
        attrName = attrName.substr(2)
        let key = attr.value
        this.update(node, attrName, key)
      }
    })
  }

  update(node, attrName, key) {
    let updateFn = this[attrName + 'Updater']
    updateFn && updateFn.call(this, node, this.vm[key],  key)
  }

  textUpdater(node,  value,  key) {
    node.textContent = value
    new Watcher(this.vm, key, (newValue) => {
      node.textContent = newValue
    })
  }

  modelUpdater(node,value,  key) {
    node.value = value
    new Watcher(this.vm, key, (newValue) => {
      node.value = newValue
    })

    node.addEventListener('input',() => {
      this.vm[key] = node.value 
    })
    
  }


  isDerictive(attrName) {
    return attrName.startsWith('v-')
  }

  isTextNode(node) {
    return node.nodeType === 3
  }

  isElementNode(node) {
    return node.nodeType === 1
  }
}