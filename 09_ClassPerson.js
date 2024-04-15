console.log("======================= First Method ===========================")

class Person {
    name
    city
    age
    constructor (myName, myCity, myAge) {
        this.name = myName;
        this.city = myCity;
        this.age = myAge;
    }
}

const jenny = new Person ("Jenny" , "Pune", 22);
console.log(jenny);
const bill = new Person ("Bill" , "Mumbai", 24);
console.log(bill);
const elon = new Person ("Elon" , "UK", 26);
console.log(elon);

console.log("======================= Second Method ===========================")

class Person1 {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    detail(){
        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}
const sam = new Person1("sam", "Pune", 22);
sam.detail();

const mina = new Person1("mina", "Mumbai", 24);
mina.detail();

const subbu = new Person1("Subbu", "LA", 38);
subbu.detail();

console.log(`===== Traversing array object ======`);
const array = [sam, mina, subbu];
for (const element of array) {
   element.detail(); 
}