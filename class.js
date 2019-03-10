var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
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
var AnimalPublic = /** @class */ (function () {
    function AnimalPublic(theName) {
        this.name = theName;
    }
    AnimalPublic.prototype.move = function (distanceMeters) {
        console.log(this.name + " moved " + distanceMeters + "m.");
    };
    return AnimalPublic;
}());
var AnimalPrivate = /** @class */ (function () {
    function AnimalPrivate(theName) {
        this.name = theName;
    }
    return AnimalPrivate;
}());
// new AnimalPrivate('CAT').name // error~
// typeScript tip error TS2341: Property 'name' is private and only accessible within class 'AnimalPrivate'
// 
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhino;
}(Animal));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal('Goat');
var rhino = new Rhino();
var employee = new Employee('Bob');
animal = rhino;
animal = employee;
