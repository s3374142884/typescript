{
    //泛型
    // function getId<Type>(id: Type) { //可以调用时指定了，不需要提前写好类型了
    //     return id
    // }

    //标准写法
    // let result = getId<string>('1')


    //简化写法
    //调用时可以不加<类型>TS会自动进行类型推论
    // let result = getId('1')


    //类型收缩
    // function getId<Type>(id: Type) {
    //     if (typeof id === 'string') {
    //         console.log(id.length);
    //     } else if (typeof id === 'number') {
    //         id.toFixed()
    //     } else {
    //         console.log(id);
    //     }
    //     return id
    // }

    //定义接口 
    interface ILength {
        length: number //这里的length别瞎写
    }

    //添加约束
    function getId<Type extends ILength>(id: Type) {
        return id
    }

    console.log(getId('1').length);


}