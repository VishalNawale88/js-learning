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


console.log(`========== trim() ==================`);
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

console.log(`========== trim() ==================`);
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);

console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

console.log(`========== slice() ==================`);
var greet = "Good Morning";
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);


function lengthOfWords(arg){
    var splitWords = arg.split(" ");
    var len = splitWords.length;
    return len;
}
var output = lengthOfWords("I am happy Buddy");
console.log(`Length of words : ${output}`);
var output = lengthOfWords("I am learning JS the language of Internet");
console.log(`Length of words : ${output}`);

// Write a function with name totalWord() with one arguments
//  "I am happy Buddy" 
//  "I am learning JS the language of internet"
// and this function should return the total numbers of words

function totalWord(sentence){
    var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords
}
var totalWords = totalWord("I am happy Buddy");
console.log(`"I am happy Buddy". Total number od words is: ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");
console.log(`"I am learning JS the language of internet". Total number od words is: ${totalWords}`);