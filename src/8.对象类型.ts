{
    // type attr = {
    //     name: string,
    //     age: number,
    //     gender: string,
    //     hobby: string,

    //     fn: (a: number, b: number) => void  //这两种方式是一样的
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
        name: string
        gender: string
        score: string
        height: string


        study: (subject: string) => void
        playgame: (game: string) => void

    }
    let student_obj: student = {
        name: 'Winson',
        gender: '男',
        score: '优秀',
        height: '183cm',
        study(subject) {
            console.log(subject);
        },
        playgame(game) {
            console.log(game);
        }
    }
    student_obj.study('数学')
    
}