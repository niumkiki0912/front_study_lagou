"use strict";
// 类与接口
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function (food) {
        console.log("\u4F18\u96C5\u7684\u8FDB\u9910: " + food);
    };
    Person.prototype.run = function (distance) {
        console.log("\u5FEB\u4E50\u7684\u5954\u8DD1" + distance);
    };
    return Person;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function (food) {
        console.log("\u6252\u62C9\u4E00\u4E0B: " + food);
    };
    Animal.prototype.run = function (distance) {
        console.log("\u6492\u4E2B\u5B50\u8DD1" + distance);
    };
    return Animal;
}());
//# sourceMappingURL=07.class-and-interface.js.map