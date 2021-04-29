var name = 'foo'

function foo() {
  name = 'foooooooo'

  function bar() {
    var age = 38
    console.log(age);
    console.log(name);
  }

  bar()
}

foo()





var name = 'foo'

function foo() {
  var name = 'foooooooo'

  function bar() {
    var age = 38
    console.log(age);
    console.log(name);
  }

  bar()
}

foo()