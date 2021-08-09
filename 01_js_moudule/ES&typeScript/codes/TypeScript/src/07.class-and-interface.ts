// 类与接口

export {}
// interface 接口只生命成员方法，不做实现
interface Run {
  run(distance: number):  void
}

interface Eat {
  eat(food: string): void
}


class Person implements Run,Eat  {
  eat(food:string):void {
    console.log(`优雅的进餐: ${food}`);
  }

  run(distance:number):void {
    console.log(`快乐的奔跑${distance}`, );
  }
}

class Animal implements Run,Eat {
  eat(food:string):void {
    console.log(`扒拉一下: ${food}`);
  }
  run(distance:number):void {
    console.log(`撒丫子跑${distance}` );
  }
}