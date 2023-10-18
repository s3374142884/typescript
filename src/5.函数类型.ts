{
    //普通函数
    function add(a: number, b: number): number {
        return a + b
    }
    add(1, 2)

    let fn = function (a: number, b: number): number {
        return a + b
    }
    fn(1, 2)

    //箭头函数
    let fun = (a: number, b: number): number => {
        return a + b
    }
    fun(1, 2)

    //现在不可以省略小括号
    let fun2 = (a: number): number => {
        return a * a
    }
    fun2(2)


    //函数的类型别名
    //只适用于函数的表达式
    //不适用于函数的声明式
    type FnType = (a: number, b: number) => number

    let fn3: FnType = (a, b) => {
        return a + b
    }
    fn3(1, 2)

    let fn4:FnType = function(a,b){
        return a+b
    }
    fn4(1,2)
}