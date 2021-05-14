export {}

class Person {
  public name: string //默认就是public
  private age: number
  protected gender: boolean

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }


  sayHi(msg: string):void {
    console.log(`I am ${this.name}, ${msg}`);
    console.log('===>', this.age);
    
  }
}

class Student extends Person{
  private constructor(name: string, age: number) {
    super(name, age)
    console.log('===>', this.gender);  // protected只允许在person和子类中访问, 允许继承
    console.log('===>', this.age); // 只能在person中使用
    
  }
  static create(name: string, age: number) {
    return new Student(name, age)
  }
}


const person = new Person('tom', 18)
person.sayHi('222')
console.log('oer===>', person.age);
console.log('oer===>', person.gender);


const jack = new Student()
Student.create('jack', 18)
