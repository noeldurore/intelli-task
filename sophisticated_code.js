/* 
Filename: sophisticated_code.js
Content: Complex and Elaborate JavaScript Code
*/

// Initialize an array of objects to store employee details
let employees = [
  {
    id: 1,
    name: "John Doe",
    age: 35,
    department: "Engineering",
    salary: 60000,
    hireDate: new Date("2015-01-10"),
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY"
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    department: "Marketing",
    salary: 50000,
    hireDate: new Date("2017-06-15"),
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      state: "CA"
    }
  },
  // Add more employee objects...
];

// Calculate the average salary of all employees
const averageSalary = employees.reduce(
  (totalSalary, employee) => totalSalary + employee.salary,
  0
) / employees.length;

// Find the employee with the highest salary
const highestPaidEmployee = employees.reduce((prevEmp, currEmp) =>
  prevEmp.salary > currEmp.salary ? prevEmp : currEmp
);

// Calculate the total age of all employees
const totalAge = employees.reduce((total, employee) => total + employee.age, 0);

// Function to format a date object to a readable string
function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return date.toLocaleDateString(undefined, options);
}

// Sort employees by hire date in ascending order
const sortedEmployees = employees.slice(0).sort((a, b) =>
  a.hireDate.getTime() - b.hireDate.getTime()
);

// Function to get the full address of an employee
function getFullAddress(employee) {
  const { street, city, state } = employee.address;
  return `${street}, ${city}, ${state}`;
}

// Create a class for managing employees
class EmployeeManager {
  constructor() {
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(id) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }

  getEmployeeById(id) {
    return this.employees.find((emp) => emp.id === id);
  }

  getTotalEmployees() {
    return this.employees.length;
  }
}

// Instantiate EmployeeManager class
const employeeManager = new EmployeeManager();

// Add a new employee
employeeManager.addEmployee({
  id: 3,
  name: "Alex Johnson",
  age: 42,
  department: "Finance",
  salary: 70000,
  hireDate: new Date("2012-03-20"),
  address: {
    street: "789 Oak St",
    city: "Chicago",
    state: "IL"
  }
});

// Output some information
console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
console.log("Highest Paid Employee:", highestPaidEmployee.name);
console.log("Total Age of Employees:", totalAge);
console.log("First Hired Employee:", sortedEmployees[0].name);
console.log("Full Address of Employee:", getFullAddress(sortedEmployees[1]));
console.log("Employee Count:", employeeManager.getTotalEmployees());
console.log("Employee by ID:", employeeManager.getEmployeeById(3));