const employee = {
    name: "Janet Fox",
    streetAddress: "12 Lily Lane",
};
function updateEmployeeWithKeyAndValue (employee, key, value){
    return {...employee,
            [key]: value}
};
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee ;
}
function deleteFromEmployeeByKey (employee, key){
    const newObj = {...employee[key]}
    delete newObj[key];
    return newObj;
}function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key];
    return employee;
}