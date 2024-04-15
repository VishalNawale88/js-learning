console.log("======================= Second Method ===========================")

class Student {
    constructor (rollnumber, name, division) {
        this.rollnumber = rollnumber;
        this.name = name;
        this.division = division;
    }
    detail(){
        console.log(`Student Details => rollnumber: ${this.rollnumber}, name: ${this.name}, division: ${this.division}`);
    }
}
const vishal = new Student("31", "vishal", "C");
vishal.detail();

const ajinkya = new Student("22", "ajinkya", "A");
ajinkya.detail();

const sumit = new Student("10", "sumit", "B");
sumit.detail();

//console.log(`===== Traversing array object ======`);
//const array = [jenny, bill, elon];
//for (const element of array) {
//   element.detail(); 
//}