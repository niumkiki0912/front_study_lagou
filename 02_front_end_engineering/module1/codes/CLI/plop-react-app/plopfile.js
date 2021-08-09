// plop 入口文件
//  导出一个函数，函数接收一个plop对象，用于创建生成器任务
module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        massage: 'component name',
        default: 'Mycomponent'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.js',
        templateFile: 'plop-templates/component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.css',
        templateFile: 'plop-templates/component.css.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.test.js',
        templateFile: 'plop-templates/component.test.hbs'
      }
    ]
  })
}