{
    let str1 = 'hello TS'
    //const声明的变量是不可修改的，意味着从始至终都必须是"Hello Ts",
    //所以TS将其当作一个类型来看，这种类型就被成为【字面量】类型
    const str2 = 'hello TS'


    // type Direction = "上" | "下" | "左" | "右"
    enum Direction {
        Up,
        Down,
        Left,
        Right
    }
    function changeDirection(direction: Direction) {
        console.log(direction);
    }

    changeDirection(Direction.Up)
    changeDirection(Direction.Down)
    changeDirection(Direction.Left)
    changeDirection(Direction.Right)


    //总结：字面量类型就是把字面量当做类型来使用
}