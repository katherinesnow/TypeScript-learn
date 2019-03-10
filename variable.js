// 解构数组
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f(input);
var _a = [1, 2, 3, 4], one = _a[0], rest = _a.slice(1);
console.log(one); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
// 对象解构
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
// let { a, b } = o
// let { a, ...passthrough } = o
// let total= passthrough.b + passthrough.c.length
var a = o.a, b = o.b;
// type c = {}
