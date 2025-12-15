const user: {
  firstName: string;
  lastName: string;
} = {
  firstName: "Shohan",
  lastName: "Islam",
};
// console.log(user);



function add(num1: number, num2: number) {
    return num1 + num2 ;
}

// console.log(add(22,22))

// arrow function 

const addNum = (num1: number, num2: number) => num1 + num2;

// console.log(addNum(56,56));

// function inside an object  


const poorUser = {
    name : "king shohan",
    balance : 500,
    addBanance(value: number) {
        const total = this.balance + value
       return total;
    }
}

// console.log(poorUser.addBanance(500))



// loop er vitore function : callback function 

const arr: number[] = [2,4,46,67];

const sqrArray = arr.map((element: number): number => element *element);

console.log(sqrArray);


