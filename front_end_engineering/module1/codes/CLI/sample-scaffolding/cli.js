#!/usr/bin/env node

// 如果是 macOS或chmod 需要修改此文件的权限
//  chmod 755 cli.js


// - 工作过程
//   - 通过命令行交互询问用户问题  inquire
//   - 根据用户返回的结果生成文件 

const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')



inquirer.prompt([
  {
    type:'input',
    name: 'name',
    messgae: 'Project name?'
  }
])
.then(answers => {
  console.log(answers)
  const templateDir = path.join(__dirname, 'templates')

  const destDir = process.cwd()

  fs.readdir(templateDir,  (err, files) => {
    if(err) throw err
    files.forEach(file => {
      console.log('file===>', file);
      ejs.renderFile(path.join(templateDir, file), answers, (err, res) => {
        if(err) throw err
        console.log('res===>', res);
        fs.writeFileSync(path.join(destDir, file), res)
      })
    })
  })
})