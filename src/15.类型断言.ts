{
    //页面上有一个id为link的a标签
    //我们知道它是a标签
    //但是TS不知道
    //doucument.getElementById的返回值是HTMLElement
    //而HTMLElement身上没有href
    //类型断言：强行指定获取到的结果类型
    const a = document.getElementById('link') as HTMLAnchorElement
    const box = document.getElementById('box') as HTMLDivElement
    const p = document.getElementById('p')

    //可以知道各个元素的类型断言是什么
    const div = document.createElement('div')


    //总结：当前函数获取到的结果类型较为宽泛时，我们知道具体类型，就可以使用类型断言

}