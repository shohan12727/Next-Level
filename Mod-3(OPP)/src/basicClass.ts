class Employee {
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }
}

const employee = new Employee('king', 239232)
const employee2 = new Employee('khan', 239233)

console.log(employee instanceof Employee)
console.log(employee2 instanceof Employee)
console.log(employee)
console.log(employee2)