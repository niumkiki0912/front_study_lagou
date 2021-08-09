"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createNumberArray(length, value) {
    var arr = Array(length).fill(value);
    return arr;
}
// 这样会造成冗余
function createStringArray(length, value) {
    var arr = Array(length).fill(value);
    return arr;
}
var res = createNumberArray(5, 5); // [5,5,5,5,5]
var res1 = createStringArray(5, 's');
// 泛型，定义时把不明确的类型作为一个参数，使用时再去传递
function createArray(length, value) {
    var arr = Array(length).fill(value);
    return arr;
}
var res2 = createArray(3, 3);
//# sourceMappingURL=09.generics.js.map