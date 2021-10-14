class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.cb = cb
    this.key = key

    Dep.target = this
    this.oldVal = this.vm[this.key]
    Dep.target = null
  }

  update() {
    let newValue = this.vm[this.key]
    if(newValue === this.oldVal) return
    this.cb(newValue)
  }
}