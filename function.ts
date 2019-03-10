// 函数类型
// 为函数定义类型
// 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
// 函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 
//
function add(x: number, y: number): number {
    return x + y
}

let myAdd = function(x: number, y: number): number { return x + y }

// 书写完整函数类型
let myAdd2: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };


// myAdd has the full function type
let myAdd3 = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
// 尝试这个例子的时候，你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TS编译器会自动识别出类型. 如下一行代码
let myAdd4: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };

// 可选参数和默认参数
// TypeScript里的每个函数参数都是必须的,这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。 
// Typescript 传递给有一个函数的参数个数必须与函数期望的参数个数一致.
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName
}

let result1 = buildName('catherine') // error,too few parameters
let result2 = buildName('catherine', 'Z.', 'Sr.') //error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

// JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined, 
// 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能
// 在TypeScript参数必须跟在必选参数的后面，在JS中可选参数可以给定默认值，后者不传
function buildName2(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}
let result4 = buildName2('catherine') //works correctly now
let result5 = buildName2('catherine', 'Z.', 'Sr.') // error, too many parameters
let result6 = buildName2("Bob", "Adams"); // ah, just right

// 在typeScript，可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 
// 它们叫做有默认初始化值的参数
// 在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。
function buildName3(firstName: string, lastName = 'Smith'){
    return firstName + ' ' + lastName
}

// 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。
// 但最佳实践：将带默认值得擦承诺书放在必须参数的后面.

// 剩余参数
// 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
// 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。
// 在JavaScript里，你可以使用 arguments来访问所有传入的参数
// 在TypeScript里，你可以把所有参数收集到一个变量里：
function buildNameMany(firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ')
}
// 
// 


// this
let deck = {
    
}