class Left {
  static of(value) {
    return new Left(value)
  }

  constructor(value) {
    this._value = value
  }

  map(fn) {
    return this
  }
}



class Right {
  static of(value) {
    return new Right(value)
  }

  constructor(value) {
    this._value = value
  }

  map(fn) {
    return Right.of(fn(this._value))
  }
}


function parseJSON(str) {
  try{
    return Right.of(JSON.parse(str))
  } catch(e) {
    return Left.of({error: e.message})
  }
}


// const r = parseJSON('{name:xn}')
// console.log('r===>', r); // Left {_value: { error: 'Unexpected token n in JSON at position 1' } }


const r = parseJSON('{ "name": "zs" }')
            .map(v => v.name.toUpperCase())
console.log('r===>', r); // Right { _value: 'ZS' }
