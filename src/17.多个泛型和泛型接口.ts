{
    //多个泛型
    // function getProp<O, K extends keyof O>(obj: O, key: K) {
    //     return obj[key]
    // }

    // let Person = {
    //     name: 'winson',
    //     sex: '男',
    // }

    // getProp(Person, 'name')
    // getProp(Person, 'sex')

    type friend = {
        name: string,
        age: number
    }

    let aaa: keyof friend = "name"
    console.log(aaa);


    //泛型接口
    interface Person<Type> {  //用来约束你将来要写的对象的属性
        name: Type,
        age: number,
        hobby:string[]
    }

    let person: Person<string> = {
        name: 'Winson',
        age: 1,
        hobby:['抽烟','喝酒','烫头']
    }

    console.log(person);

}