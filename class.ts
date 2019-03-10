// 重点： 区分几个概念
// 静态属性： 存在与类本身上而不是类的实例上.
// 实例属性：仅当类被实例化的时候才会被初始化的属性

// TS实现
// 实例属性(常用)： greeting: string;
// 私有属性： private greeting: string;
// 静态属性： static greeting: string; 访问: [className: 类名].[属性名]


// 实例方法(常用)，私有方法，静态方法
// 实例方法：funcName(params) {} // 访问：[实例对象].[方法名]
// 私有方法：private funcName(params) {} // 访问：只能内部访问
// 静态方法：static funcName(params) {} // 访问：[类名].[方法名]



class Greeter {
    greeting: string; // 实例属性
    constructor(message: string) {
        this.greeting = message
    }
    /**
     * [greet 实例方法]
     */
    greet() {
        return 'Hello, ' + this.greeting
    }
}

let greeter = new Greeter('world')

// 类继承 ---案例1
// class Animal {
//     move(distanceMeters: number = 0) {
//         console.log(`Animal moved ${distanceMeters}m.`)
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!')
//     }
// }

// const dog = new Dog()
// dog.bark()
// dog.move(10)
// dog.bark()

// 类继承-- 案例2
// class Ainmal {
//     name: string;
//     constructor(theName: string) {
//         this.name = theName
//     }

//     move(distanceMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceMeters}m.`)
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) {
//         super(name)
//     }

//     move(distanceMeters = 5) {
//         console.log('Slithering...')
//         super.move(distanceMeters)
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     move(distanceMeters = 45) {
//         console.log('Galloping...')
//         super.move(distanceMeters)
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

class AnimalPublic {
    public name: string;
    public constructor(theName: string) {
        this.name = theName
    }
    public move(distanceMeters: number) {
        console.log(`${this.name} moved ${distanceMeters}m.`)
    }
}


class AnimalPrivate {
    private name: string;
    constructor(theName: string) {
        this.name = theName
    } 
}

// new AnimalPrivate('CAT').name // error~
// typeScript tip error TS2341: Property 'name' is private and only accessible within class 'AnimalPrivate'
// 

class Animal {
    private name: string;
    constructor(theName: string) {
        this.name = theName
    }
}

class Rhino extends Animal {
    constructor() {
        super('Rhino')
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName
    }
}

let animal = new Animal('Goat')
let rhino = new Rhino()

let employee = new Employee('Bob')
animal = rhino
// animal = employee
//  Type 'Employee' is not assignable to type 'Animal'.
// Types have separate declarations of a private property 'name'.


// protected成员在派生类中仍然可以访问
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name
    }
}
class Employee2 extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee2('catherine', 'Tech.')
console.log(howard.getElevatorPitch())
console.log(howard.name) // error

// 构造函数也可以被标记为protected, 这意味着这个类不能再包含它的类外被实例化
// 但是能被继承
class PersonBasic {
    protected name: string;
    protected constructor(theName: string) {
        this.name = theName
    }
}

class Employee3 extends PersonBasic {
    private department: string;
    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard2 = new Employee3('catherine', 'Tech.')
let personName = new PersonBasic('catherine') //  错误: 'Person' 的构造函数是被保护的.

// readonly 修饰符
// 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化
class ReadOnlyCls {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string = 'uname') {
        this.name = theName
    }
}

let dad = new ReadOnlyCls('Man with the 8 strong legs')
dad.name = 'Man with the 3-piece suit' // error! name 是只读的


// 参数属性
// 参数属性通过给构造函数参数添加一个访问限定符来声明
// 使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样
class AnimalParam {
    constructor(private name: string) {}
    move(distanceMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}


// comparison
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }


// class Employee4 {
//     fullName: string;
// }

// let employee4 = new Employee4()
// Employee4.fullName = 'catherine'
// if (employee4.fullName) {
//     console.log(employee4.fullName)
// }


// 把类当做接口使用