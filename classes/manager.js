const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, salary, title, manager, employees = []){
        super(name,salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee){
        this.employees.push(employee);
        employee.manager = this;
    }


    _totalSubSalary(){
        let totalSalary = 0;

        for(let employee of this.employees){
            totalSalary += employee.salary;

            if(employee instanceof Manager){
                totalSalary += employee._totalSubSalary();
            }
        }
        return totalSalary;
    }

    calculateBonus(multiplier){
        let totalSalaryOfSubordinates = this._totalSubSalary();
        let bonus = (this.salary + totalSalaryOfSubordinates)*multiplier;
        return bonus;
    }

}

try{
    module.exports = Manager;
} catch{
    module.exports = null;
}
