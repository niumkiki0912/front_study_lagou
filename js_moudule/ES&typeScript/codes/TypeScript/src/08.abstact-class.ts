export {}
// abstract, 只能用于继承，不能再使用new来创建实例对象
abstract class Animal {
  eat(food:string):void {
    console.log(`扒拉一下: ${food}`);
  }

  abstract run(distance: number): void
}


class Dog extends Animal {
  run(distance: number): void {
    console.log(`撒丫子跑:${distance}`)
  }
}

const dog = new Dog()
dog.eat('meat')
dog.run(1)