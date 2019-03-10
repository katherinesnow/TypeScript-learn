// 1. 类型注解：ypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。
function greeter(person: string) {
    return "hello, " + person
}

let user = 'Jane User'
// let user = [0, 1, 2]
// 要注意的是尽管有错误，greeter.js文件还是被创建了。 就算你的代码里有错误，你仍然可以使用TypeScript。但在这种情况下，TypeScript会警告你代码可能不会按预期执行
console.log(greeter(user))


// 2. 接口
interface Person {
    firstName: string,
    lastName: string,
}

function greeter2(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user2 =  { firstName: 'Zhao', lastName: 'Catherine'}
console.log(greeter2(user2))


// 3. 类 
// TypeScript支持JavaScript的新特性，比如支持基于类的面向对象编程
// 还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

let user3 = new Student("Jane", "M.", "User")
console.log(greeter2(user3))

// 基础类型
let isDone: boolean = false
let num: number = 6
let uname: string = 'catherine'
// name = 'Smith'

let userName: string = 'catherine'
let age: number = 37
let sentence: string = `Hello, my name is ${ userName }.I'll be ${ age + 1 } years old next month.`


let list: number[] = [1, 2, 3]
let list2: Array<number> = [4, 5, 6]

let x: [string, number]
x = ['hello', 10] // ok
// x = [10, 'hello'] // Error

enum Color { Red, Green, Blue }
let c: Color = Color.Green

enum Color2 { Red = 1, Green, Blue }
let c2: Color2 = Color2.Green

let colorName: string = Color[2]
console.log(colorName)

let notSure: any = 4
notSure = 'Maybe a string instead'
notSure = false // okay, definitely a boolean

// 当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
let list3: any[] = [1, true, 'free']
list3[1] = 100

// void 
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
    alert('This is my warning message')
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined

// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
// 注意：我们鼓励尽可能地使用--strictNullChecks，但在本手册里我们假设这个标记是关闭的
let u: undefined = undefined
let n: null = null

// Never
// never 类型表示的是那些永不存在的值得类型
// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
 
// 返回never的函数必须存在无法达到的终点 
function error(message: string): never {
    throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
    return error('something failed')
}

// 返回never 的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while(true) {}
}

// 类型断言
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

// 另一个为as语法
let someVal: any = 'this is a string'
let strLen: number = (someVal as string).length
