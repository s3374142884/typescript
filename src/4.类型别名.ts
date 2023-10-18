{
//类型别名
type ArrType = (number|string)[]

let arr1:ArrType = [1,2,3,'4']      
let arr2:ArrType = [1,2,3,'4']
let arr3:ArrType = [1,2,3,'4']

type ItemType = number|string
let arr4:ItemType[] = [1,2,3,'4']

console.log(arr1,arr2,arr3,arr4);

}