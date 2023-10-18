{
    //如果不写return 我们知道默认返回的是undefined，但是ts给我们类型推断为void
    //ts给我们提供了一个返回值类型：void意思是没有返回值
    let printText = (content: string):void => {
        console.log(content);
    }
    printText('大家好')
}