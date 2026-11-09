
import "./type-interface.js"



type Role = "admin" | "member" 

const shohan : Role = "admin"


interface User {
    name: String;
    id: number;
    role: "admin" | "member"
}

const user: User = {
    id: 123,
    name: "Shohan",
    role: "admin"
}

let anyType: any = "king Shohan"

anyType.length

// console.log(anyType)

const something: unknown =  234

// console.log(something)

const number:Number = 49

// console.log(number)













// console.log(user)











// console.log(shohan)