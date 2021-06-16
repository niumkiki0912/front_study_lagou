export default  () => {
  const element = document.createElement('h2')
  element.textContent = 'hello鸭111'
  element.classList.add('heading')

  element.addEventListener('click', () => {
    alert('hhhh hello')
  })

  console.log111(1)
  return element
}