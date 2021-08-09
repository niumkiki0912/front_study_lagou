export const Button = () => {
  return document.createElement('button')

  return console.log('Button===>', 1111);
}

export const Link = () => {
  return document.createElement('a')
}


export const Heading = level => {
  return document.createElement(`h${level}`)
}