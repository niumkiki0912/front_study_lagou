import createEditor from './editor.js'
import background from './icon.png'
import './main.css'

const editor = createEditor()
document.body.appendChild(editor)
console.log('editor===>', editor);

const img = new Image()
img.src = background
document.body.appendChild(img)


if(module.hot) {
  // HMR
  let lastEditor = editor
  // 手动处理
  module.hot.accept('./editor', () => {
    console.log('editor 模块发生了变化')
    const value = lastEditor.innerHTML
    document.body.removeChild(editor)
    const newEditor = createEditor()
    newEditor.innerHTML  = value
    document.body.appendChild(newEditor)
    lastEditor = newEditor
  })
  
  module.hot.accept('./icon.png', () => {
    img.src = background
    console.log('background===>', background);
    
  })
}
