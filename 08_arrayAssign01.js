const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal);

console.log("===========================  1ST Question Answer  =====================================");
const element = fruits_seasonal[0];
console.log(`First element of the list: ${fruits_seasonal[0]}`);

const len = fruits_seasonal.length;
const element0 = fruits_seasonal[len-1];
console.log(`Last element of the list: ${fruits_seasonal[4]}`);

console.log("===========================  2ND Question Answer  =====================================");

const fruits_seasonal0 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
fruits_seasonal0.unshift("Papaya");
console.log(fruits_seasonal0);

console.log("=========================== 3RD Question Answer  =====================================");
const deleteElements = fruits_seasonal0.splice( 4, 1 );
console.log(fruits_seasonal0);

console.log("=========================== 4TH Question Answer  =====================================");
fruits_seasonal0.push("Pineapple");
console.log(fruits_seasonal0);

console.log("=========================== 5TH Question Answer  =====================================");
fruits_seasonal0.splice(4, 0, "Dragon Fruit")
console.log(fruits_seasonal0);

console.log("=========================== 6TH Question Answer  =====================================");
fruits_seasonal0.splice(2, 1, "Kiwi")
console.log(fruits_seasonal0);

console.log("=========================== 7TH Question Answer  =====================================");
let subFruit_seasonal=fruit_seasonal.slice(1,4);
console.log(`Element starting from index 1 to 4 : ${subFruit_seasonal}`);

console.log("=========================== 8TH Question Answer  =====================================");
let lastThree=fruits_seasonal0.slice(fruit_seasonal.length-3);
console.log(`Last three element using length property : ${lastThree}`);