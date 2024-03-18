console.log("========= Prefix and Postfix  operator ==============");
var a = 5;
var b = a++;
var result = ++b // b = a + 1  // Prefix
console.log(`Result is: ${result}`);

console.log("========= Prefix and Postfix  operator ==============");
var n1=5;
var result = n1++ + ++n1 + n1++;
console.log(`Result is: ${result}`);

console.log("========= Prefix and Postfix  operator ==============");
var a=2;
var b = ++a + ++a + a++ - --a;
console.log(`Result is: ${b}`);


console.log("========= Prefix and Postfix  operator ==============");
var a=4;
var b = a-- + ++a + ++a + a++;
console.log(`Result is: ${b}`);

console.log("========= Prefix and Postfix  operator ==============");
var n1=10;
var n1 = n1 % 2 == 0;
console.log(`Result is: ${n1}`);