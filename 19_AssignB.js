class Employee {
constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
}
detail(){
    console.log(`Person Details => Id: ${this.id}, Name: ${this.name}, Dept: ${this.dept}, Salary: ${this.salary}, Company: ${this.company} `);
}
}

const emp_anil = new Employee(22, "Anil", "IT", 50008, "TCS");
const emp_radha = new Employee(33, "Radha", 'RR', 74808, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47080, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75800, "TCS");
const emp_mahi = new Employee(99, "Manesh", "HR", 85000, "Infy");

 
const arrayEmployees = [ emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi ];

console.log(`== All the Employee Working in TCS Company = Step = 1 ===`);
arrayEmployees.forEach((element)=>{
        //this  is new method like if condition -->
        element.emp_company=="TCS" && console.log(`Name and Company of Employee=>${element.emp_name},${element.emp_company}`)
})

console.log(`== All the Employee Working in Finance Department = Step = 2 ===`);
arrayEmployees.forEach((element)=>{
        //this  is new method like if condition -->
        element.emp_dept=="Finance" && console.log(`Department and Employee Name=>${element.emp_dept},${element.emp_name}`)
})


console.log(`== All the Employee Working in Company infy = Step = 6 ===`);
arrayEmployees.forEach((element)=>{
    if(element.emp_company=="Infy"){
        console.log(`**********`);
        element.emp_details();
    }
})