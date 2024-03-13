console.log("===============Step=1===================")
//Function with no arguments and no return value
function stringsHandsOn(){
    console.log("   Hey you are doing good, keep it up   ");
}
stringsHandsOn();

console.log("===============Step=2===================")
var greet = "   Hey you are doing good, keep it up   ";
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);

console.log("===============Step=3===================")
//var greet = "   Hey you are doing good, keep it up   ";
//var lengthBeforeTrim = greet.length;
//console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${greetAfterTrim} it's length is: ${lengthAfterTrim}`);


console.log("===============Step=4===================")
var greet = "   Hey you are doing good, keep it up   ";
var lengthBeforeTrim = greet.length;
//console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
//console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

console.log(`Total number of spaces removed is step 3 are: ${lengthBeforeTrim-lengthAfterTrim}`);

console.log("===============Step=5===================")
var greet = "   Hey you are doing good, keep it up   ";
var lengthBeforeTrim = greet.length;
//console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
//console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

var greet = "Hey you are doing good, keep it up";
var totalChars = greet.length;
//console.log("Total number of chars is:" , totalChars);

var charAt0 = greet.charAt(0);
console.log("First Character After the trim is:", charAt0);

var sentence = "Hey you are doing good, keep it up";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last Character After the trim is:" , lastChar);

console.log("===============Step=6===================")
var greet = "Hey you are doing good, keep it up";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total no of words are in the string: ${resultValue.length}`);

console.log("===============Step=7===================")
var greet = "Hey you are doing good, keep it up";
var result = greet.search("good");
console.log(`Index of the word "good" is: ${result}`);

console.log("===============Step=8===================")
var greet = "Hey you are doing good, keep it up";
var result = greet.substring(22, 34);
console.log(`Substring starting form index "22" is: ${result}`);

console.log("===============Step=9===================")
var greet = "Hey you are doing good, keep it up";
var result = greet.includes("up");
console.log(`Is the string ends with the words "up" is: ${result}`);

console.log("===============Step=10===================")
var greet = "Hey you are doing good, keep it up";
var result = greet.includes("Hey");
console.log(`Is the string starts with the words "Hey" is: ${result}`);