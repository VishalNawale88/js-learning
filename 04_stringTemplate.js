console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Gajanan";
var experience = 10;

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} `);
console.log(` My name is: ${firstName} and city is: ${city} and experience is: ${experience}`);


console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log("========== trim() ==================");
var str = "    Trim Both Side    ";
console.log(str.trim())
//prints "Trim Both Side"


console.log("========== includes() ==================");
var str = "My Name is codingtute.";
console.log(str.includes("name"))
//prints "True"


console.log("========== Slice(start, end) ==================");
var str = "Developers world!";
console.log(str.slice(0, 10))
//prints "Developers"


console.log("========== trim() ==================");
var greet = "    Good Morning    ";
console.log(`${greet} it's string is: ${greet.length}`);
var length = greet.length;
greet.trim(); 
//prints "Trim Both Side"