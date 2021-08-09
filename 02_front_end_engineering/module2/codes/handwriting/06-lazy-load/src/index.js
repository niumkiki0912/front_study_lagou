let oBtn = document.getElementById('btn')
oBtn.addEventListener('click', function() {
  import(/*webpackChunkName:"login"*/ './login.js').then(login => {
    console.log('login===>', login);
    
  })
})


console.log('index===>');
