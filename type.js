// 为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。 TypeScript支持与JavaScript几乎相同的数据类型，
// 此外还提供了实用的枚举类型方便我们使用
// 布尔值
var isDone = false;
// 数字
// 和JS一样，TS里的所有数字都是浮点数. 这些浮点数的类型是number
// 除了支持十进制和十六进制字面量，TS还支持ECMAScript2015中引入的二进制和八进制字面量
var num = 6;
// 字符串
// let name: string = 'catherine'
// name = 'Smith'
// 你还可以模板字符串，他可以定义多行文本和内嵌表达式.
var userName = 'catherine';
var age = 30;
var sentence = "Hello, my name is " + userName;
// 数组
// TS有两种方式可以定义数组. 第一种，可以再元素类型后面接上[], 表示由此类型元素组成的一个数组:
var list = [1, 2, 3];
// 第二种使用数组泛型, Array<元素类型>
var list2 = [1, 2, 3];
// 枚举类型enum
// enum 类型是对JS标准数据类型的一个补充.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// 默认情况下，从0 开始为元素编号，你也可以手动的指定成员的数值.
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
// 或者，全部采用手动赋值
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Grren"] = 2] = "Grren";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
var c3 = Color3.Grren;
var colorName = Color3[2];
console.log(colorName);
// Any 类型
// 有时候，我们会想要为哪些在编程阶段还不清楚类型的变量指定一个类型。
// 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库. 
// 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var arr = [1, true, 'free'];
console.log(arr[1]);
// Void
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser() {
    console.log('This is my warning message');
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
var unusable = undefined;
// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
// 注意：我们鼓励尽可能地使用--strictNullChecks，但在本手册里我们假设这个标记是关闭的
var u = undefined;
var n = null;
// Never
// never 类型表示的是那些永不存在的值得类型
// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
// 返回never的函数必须存在无法达到的终点 
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error('something failed');
}
// 返回never 的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) { }
}
// 类型断言
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
// 类型断言有两种形式。 其一是“尖括号”语法：
var someValue = 'this is a string';
var strLength = someValue.length;
// 另一个为as语法
var someVal = 'this is a string';
var strLen = someVal.length;
