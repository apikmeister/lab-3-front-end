function Employee(employeeName, employeeId, salary) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.salary = salary;
}

function Manager(managerName, branch) {
    this.managerName = managerName;
    this.branch = branch;
}

Manager.prototype = new Employee("Will Smith", "54321", 15500);
var myManager = new Manager("Mary Jane", "Canada");

console.log("Employee Name: " + myManager.employeeName);
console.log("Employee ID: " + myManager.employeeId);
console.log("Salary: $" + myManager.salary.toFixed(2));
console.log("Manager Name: " + myManager.managerName);
console.log("Branch: " + myManager.branch);