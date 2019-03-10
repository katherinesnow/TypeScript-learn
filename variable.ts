// 解构数组
let input = [1, 2]
let [first, second] = input
console.log(first)
console.log(second)


function f([first, second]: number[]) {
    console.log(first)
    console.log(second)
}

f(input)

let [one, ...rest] = [1, 2, 3, 4]
console.log(one) // outputs 1
console.log(rest) // outputs [ 2, 3, 4 ]

// 对象解构
let o = {
    a: 'foo',
    b: 12,
    c: 'bar',
}

// let { a, b } = o

// let { a, ...passthrough } = o
// let total= passthrough.b + passthrough.c.length
let {a, b}: {a: string, b: number} = o

type c = { a: string, b?: number }
function f2({ a, b }: C): void {
    // ...
}