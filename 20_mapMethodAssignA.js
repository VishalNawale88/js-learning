console.log ("================ Step - 1 Answer ================")
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const arrayTransform = [];
arrayNumbers.forEach(element => {
    arrayTransform.push(element+10);
});

console.log("Original Array");
console.log(arrayNumbers);
console.log("Adding 10 Value in Each Array Output");
console.log(arrayTransform);

console.log ("================ Step - 2 Answer ================")

console.log("Original Array");
console.log(arrayNumbers);

const arrayCube = arrayNumbers.map((currentValue)=>{
    return currentValue * currentValue * currentValue;
} );

console.log("Cube of Each Array Output");
console.log(arrayCube);

console.log ("================ Step - 3 Answer ================")

console.log("Original Array");
console.log(arrayNumbers);

console.log(`Adding index value into corresponding each element`);
const arrayIndex=arrayNumbers.map((element, index)=>{
    return element+index;
})
console.log(arrayIndex);