// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "123 main street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
const employ = updateEmployeeWithKeyAndValue(
    employee, 
    "Sam", 
    "11 Broadway",
    );

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}