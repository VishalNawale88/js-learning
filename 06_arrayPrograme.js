const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`==== Even index elements =======`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        console.log(element);
    }
    
    
}

const arrayNumbers1 = [2, 4, 1, 7, 9, 8];
console.log(`==== odd index elements =======`);
for (let index = 0; index < arrayNumbers1.length; index++) {
    if (index%2!==0) {
        const element = arrayNumbers1[index];
        console.log(element);
    }
    
    
}

const arrayNumber2 = [2, 4, 1, 7, 9, 8];
console.log(`==== Sum an array elements =======`);
let sum = 0;
for (let index = 0; index < arrayNumber2.length; index++) {
    const element = arrayNumber2[index];  
    sum = sum + element;
}
console.log(`Sum of an array is: ${sum}`);

const arrayNumbers3 = [2, 4, 1, 7, 9, 8];
console.log(`===== Traversing an array using for in loop=======`);
for (const index in arrayNumbers3) {
    console.log(arrayNumbers3[index]);
}
console.log(`=======Odd index elements===========`);
for (const index in arrayNumbers3) {
    if (index%2!=0) {
        console.log(arrayNumbers3[index]); 
    }
}