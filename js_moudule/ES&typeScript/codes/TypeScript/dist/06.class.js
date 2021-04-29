"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }
    Person.prototype.sayHi = function (msg) {
        console.log("I am " + this.name + ", " + msg);
        console.log('===>', this.age);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        var _this = _super.call(this, name, age) || this;
        console.log('===>', _this.gender); // protected只允许在person和子类中访问, 允许继承
        console.log('===>', _this.age); // 只能在person中使用
        return _this;
    }
    Student.create = function (name, age) {
        return new Student(name, age);
    };
    return Student;
}(Person));
var person = new Person('tom', 18);
person.sayHi('222');
console.log('oer===>', person.age);
console.log('oer===>', person.gender);
var jack = new Student();
Student.create('jack', 18);
//# sourceMappingURL=06.class.js.map