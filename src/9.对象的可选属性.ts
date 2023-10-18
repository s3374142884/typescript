{
    // type attr = {
    //     name: string,
    //     age: number,
    //     gender: string,
    //     hobby: string,
    //     fn: (a: number, b: number) => void
    
    //     fn: (a: number, b: number): void

    // }
    // let obj: attr = {
    //     name: 'winson',
    //     age: 18,
    //     gender: '男',
    //     hobby: '打游戏',
    //     fn(a, b) {
    //         console.log(a, b);
    //     }
    // }
    // obj.fn(1, 2)


    type student = {
        name?: string
        gender: string
        score: string
        height: string


        study: (aaa:string,subject?: string) => void
        playgame: (game: string) => void

    }
    let student_obj: student = {
        name: 'Winson',//可选属性
        gender: '男',
        score: '优秀',
        height: '183cm',
        study(aaa,subject) {
            console.log(aaa,subject);
        },
        playgame(game) {
            console.log(game);
        }
    }
    //传统
    if(student_obj.name){
        console.log(student_obj.name);
        
    }
    //高级
    student_obj.name&&student_obj.name.concat()
    student_obj.study('aaa')
    //可选链操作符，前面有才会执行后面的函数
    student_obj.name?.concat()
}