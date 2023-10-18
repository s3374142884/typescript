{
    interface Iperson {
        name: string
        age: number
        gender: string
        sayHi: () => void
    }
    let p1: Iperson = {
        name: 'Winson',
        age: 18,
        gender: '未知',
        sayHi() {
            console.log('hello');
        }
    }
    // p1.sayHi()
    // interface只能约束对象，type更灵活

    interface Istudent extends Iperson {
        score: number
    }
    let p2: Istudent = {
        name: 'Winson',
        age: 18,
        gender: '未知',
        score: 99,
        sayHi() {
            console.log('hello');
        }
    }

    //type实现继承
    type person = {
        name: string,
        age:number,
        gender:string
    } & Istudent

    let p3:person = {
        name:'Winson',
        age:20,
        gender:'男',
        score:99,
        sayHi:()=>{
            console.log('hello');
            
        }
    }

    
}