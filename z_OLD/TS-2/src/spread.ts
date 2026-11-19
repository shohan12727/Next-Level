const number: number[] = [6,7,8,9,45];

const oddumber: number[] = [1,3,5,7];

const evenNumber: number [] = [2,4,6,8];

number.push(...oddumber, ...evenNumber);

// console.log(number)

const user = {
    name: "king shohan",
    phoneNumber : "3802932983928329"
}

const otherInfo = {
    favColor:"black",
    hobby: "outing"
}

const userInfo = {...user, ...otherInfo};

// console.log(userInfo)

const sendInvite = (...colors: string[]) => {
    colors.forEach((color:string) => {
        console.log(`send to the invitation to ${color}`)
    })
}

console.log(sendInvite("shohan", "sakib","nakib"))

