// 此文件为generator的核心入口
// 需要导出一个继承字yeoman generator 的类型
// Yeoman Generator在工作时会自动调用我们在此类型中定义的一些生命周期方法
//  

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    // 接收用户输入，询问用户时会调用此方法
    return this.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Your project name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'success',
        message: '是否确认成功?',
        default: true
      }
    ])
    .then(answers => {
      // answers = {title: '用户输入的值'}
      this.answers = answers
    })
  }
  writing() {
    // 在项目目录中写入文件
    // this.fs.write(
    //   this.destinationPath('sample.txt'),
    //   Math.random().toString()
    // )


    const tmpl = this.templatePath('foo.txt')
    const output = this.destinationPath('foo.txt')
    console.log('===>', this.answers);
    

    const context = this.answers

    this.fs.copyTpl(tmpl,output,context)
  }
}