const kgToGmConverter= (input: string | number) =>  {
    if(typeof input === "number") {
             return input*1000;

    }  else if(typeof input === "string") {
        const [value] = input.split(" ")
        return `Converted Output is ${Number(value) * 1000}`
    }
}


const resutl1 = kgToGmConverter(2) ;
const result2 = kgToGmConverter("2 Kg")

console.log(resutl1, result2)
