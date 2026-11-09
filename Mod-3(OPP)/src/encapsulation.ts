class Employee {
    constructor(
        public name: string,
        private _baseSalary: number,
    ) {}  

    get baseSalary(): number {
        return this._baseSalary;
    }

    getSalaryWithBonus(): number {
        return this._baseSalary + 5000;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0){
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }

}

const employee = new Employee('king', 239232)
const employee2 = new Employee('khan', 239233)

console.log(employee.baseSalary)
console.log(employee2)