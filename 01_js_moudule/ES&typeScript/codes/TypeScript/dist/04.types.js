"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var foo = function () { }; //{} //[]    //不单指对象类型
var obj = { foo: 1, bar: 'str' };
// 数组类型
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
// 例如
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (pre, curr) { return pre + curr; }, 0);
}
sum(1, 2, 3, 4, 5); // 当传入字符串时，会报错。这样就可以更简单的进行类型判断
// 元祖类型
var tuple = ['job', 18];
// tuple[0]
var name = tuple[0], age = tuple[1];
console.log('===>', name);
console.log('===>', age);
// 应用: react-useState
Object.entries({
    foo: 'foo',
    bar: 'bar'
});
//# sourceMappingURL=04.types.js.map