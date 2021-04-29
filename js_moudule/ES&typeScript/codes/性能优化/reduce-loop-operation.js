var test = () => {
  const array = [1,2,3,4,5,5,6,6,6,6,6,66]
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}



var test = () => {
  const array = [1,2,3,4,5,5,6,6,6,6,6,66]
  const len = array.length
  for (var i = 0; i < len; i++) {
    console.log(array[i]);
  }
}


var test = () => {
  const array = [1,2,3,4,5,5,6,6,6,6,6,66]
  const len = array.length
  while(len --) {
    console.log(array[len])
  }
}