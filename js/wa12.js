
// PROBLEM 1

const employeeDetails = {
    "employees": [
        {
        "Name" : "Sam",
        "Department" : "Tech",
        "Designation" : "Manager",
        "Salary": 40000,
        "RaiseEligible": "True",
        },
        {
        "Name" : "Mary",
        "Department" : "Finance",
        "Designation" : "Trainee",
        "Salary": 18500,
        "RaiseEligible": "True",
        },
        {
        "Name" : "Bill",
        "Department" : "HR",
        "Designation" : "Executive",
        "Salary": 21200,
        "RaiseEligible": "False",
        }
    ]
};
console.log("Problem 1:")
console.log(employeeDetails);

// PROBLEM 2

const company = {
    "companyName": "Tech Stars",
    "Website": "www.techstars.site",
    "Employees": employeeDetails
}
console.log("Problem 2:")
console.log(company)

//PROBLEM 3
employeeDetails.employees[3] = {"Name": "Anna", "Department": "Tech", "Designation": "Executive", "Salary": 25600, "Raise Eligible": "False"} ;
console.log("Problem :")
console.log(employeeDetails);

//PROBLEM 4
var totalSalary = 0;
for (const employee of company.Employees.employees) {
    const salary = employee.Salary;
    totalSalary += salary;
}
console.log("Problem 4:")
console.log(`Total Salary: $${totalSalary}`)

// PROBLEM 5
function updateSalary() {
    for (let i = 0;i<employeeDetails.employees.length;i++) {
        if (employeeDetails.employees[i].RaiseEligible === "True"){
            employeeDetails.employees[i].Salary += (.10*employeeDetails.employees[i].Salary);
            employeeDetails.employees[i].RaiseEligible = "False";
        }
        else{
            
        }
}
}
updateSalary();
console.log("Problem 5:")
console.log(employeeDetails);

// PROBLEM 6
const workingFromHome = ['Anna', 'Sam']
for (let i = 0;i<employeeDetails.employees.length;i++) {
    if (workingFromHome.includes(employeeDetails.employees[i].Name) === true){
        employeeDetails.employees[i].wfh = "True";
    }
    else{
        employeeDetails.employees[i].wfh = "False";
    }
}
console.log("Problem 6:")
console.log(employeeDetails)






