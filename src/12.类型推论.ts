{
    //类型推论
    //主要在两种情况下会发生：
    //1.变量初始化
    //let a = 10 //简写
    //let a:number = 10//写全

    //2.函数返回值
    function add(a: number, b: number) {  //简写
        return a * b
    }

    function add(a: number, b: number): number {   //完整写法
        return a * b
    }

    //小建议：开发时能偷懒则偷懒
}