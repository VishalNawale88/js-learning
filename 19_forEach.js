let array = [2, 4, 1, 7, 9, 8];
array.forEach((element, index, array) => {
    console.log(element, index, array);
});

console.log ("==================== For Each Using Mandatory Arguments ========================")
array.forEach((value) => {
    console.log(value);
});

console.log(`==== forEach to even numbers =====`);
array.forEach(element => {
    if(element%2==0){
        console.log(element);
    }
});

console.log(`==== forEach to odd numbers =====`);
array.forEach(element => {
    if(element%2==1){
        console.log(element);
    }
});

const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(20);
set.add(50);
console.log(set);

set.forEach( (element) =>{
  console.log(element);
} );

console.log(`=== forEach using map collection ======`);
let mapStudentMarks = new Map();
mapStudentMarks.set("Elon", 90);
mapStudentMarks.set("Stew", 56);
mapStudentMarks.set("Jenny", 45);
mapStudentMarks.set("Ratan", 72);
mapStudentMarks.set("Andy", 80);
mapStudentMarks.set("Larry", 84);

mapStudentMarks.forEach( (value, key)=> {
    console.log(value, key);
} );