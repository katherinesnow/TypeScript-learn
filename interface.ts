// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 object'}
printLabel(myObj)

// 注意：还有一点值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以


// 2.接口--可选属性
// 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
// 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。 比如，我们故意将 createSquare里的color属性名拼错，就会得到一个错误提示：
// 
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };

    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

// 3. 接口-只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性

interface Point {
    readonly x: number;
    readonly y: number;
}

// let p1: Point = { x: 10, y: 20 }
// p1.x = 5 //error!
 
 
// 4. TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
// ro[0] = 12 // error
// ro.push(5) // error
// ro.length = 100 //error
// a = ro // error 
// 就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
// a = ro as number[];


// 5.readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
// 
// 6. 接口-描述函数类型定义
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString)
    return result > -1
}


// 7. 可索引的类型
// 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。 
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ['Bob', 'Fred']
let myStr: string= myArray[0]
// 上面例子里，我们定义了StringArray接口，它具有索引签名。 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。
// 

// ????????共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

// 8. TypeScript也能够用它来明确的强制一个类去符合某种契约
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d
//     }
//     constructor(h: number, m: number) {
//         // this.h = h 
//         // this.m = m
//     }
// }

// interface ClockConstructor {
//     new (hour: number, minute: number)
// }

// class Clock2 implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('beep beep')
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('tick tock')
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// 继承接口
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = 'blue';
square.sideLength = 10


interface PenStroke {
    penWidth: number;
}

interface Square2 extends PenStroke, Shape {
    sideLength: number;
}

let square2 = <Square2>{};
square2.color= 'blue';
square2.sideLength = 10;
square2.penWidth = 6.0;


// 接口-- 混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter { // Counter 表示返回Counter 对象类型
     let counter = <Counter>function (start: number) { }; // ??? temp  // Counter 类型转化
     counter.interval = 123;
     counter.reset = function() { };
     return counter;
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

// 接口-- 集成类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void
}

// 类-继承类-实现接口
class Button extends Control implements SelectableControl {
    select() {
        console.log('button implements interface SelectableControl')
    }
}

// 类-继承-类
class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() {}
}

class Location {}


