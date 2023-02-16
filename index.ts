let name: string =  "Damian"
let teaching: boolean = true
let age: number = 50
let classes: string[]  =["typescript", "c#", "react"]
// console.table (classes)
// console.log(name, age, teaching)
enum TaxesForms {
    Standar_Taxes = "ez2055",
    Child_Credit = "647",
    Crypto_Credit = "2055",
}
//console.log(TaxesForms.Standar_Taxes)
let code: string|number = "11"
code =11;
//console.log (code)

let cars: string[] = ["mustang", "tesla", "accord", "truck"]

// return the value of the position index
function findIndex(index: number, array: string[]): string{
    return array[index]
}
//console.log(findIndex(1, cars))

//Doesn't return anything => void
function findIndex2(index: number, array: string[]): void{
    console.log(array[index])
}
//findIndex2(2,cars)
interface classroom  {
    name: string,
    duration: number,
    boring: boolean,
    room?: string
}


let thisClassroom: classroom | null={
    name: "typescript",
    duration: 6,
    boring: false,
    room: "Boca Code Classroom"
}

//console.log(thisClassroom)

let thatClassroom: classroom={
    name: "Javascript 2.0",
    duration: 2,
    boring: true
}

