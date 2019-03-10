// 目前只学习了基本枚举用法，其他以后有时间学习????

// Up使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// Up的值为 0， Down的值为 1等等。 当我们不在乎成员的值的时候，这种自增长的行为是很有用处的，但是要注意每个枚举成员的值都是不同的。
enum Direction2 {
    Up,
    Down,
    Left,
    Right
}

enum Response {
    No = 0,
    Yes = 1
}

function respond(recipient: string, message: Response): void {
    // ...
}
respond('Princess Caroline', Response.Yes)

// 字符串枚举
enum Direction3 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 异构枚举
// 从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}