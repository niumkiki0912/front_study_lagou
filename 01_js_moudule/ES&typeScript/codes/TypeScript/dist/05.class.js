"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function (msg) {
        console.log("I am " + this.name + ", " + msg);
    };
    return Person;
}());
var person = new Person('tom', 18);
person.sayHi('222');
//# sourceMappingURL=05.class.js.map