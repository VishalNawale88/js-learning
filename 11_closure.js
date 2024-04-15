var global = 300;
function outer(){
   let num2 = 200;
   let inner = function(){
        let num1 = 100;
        console.log(`Inner Function expression`);
        console.log(` num1: ${num1}`);
        console.log(` num2: ${num2}`);
        console.log(` global: ${global}`);
   }
  return inner;
}
// outer()();
let result = outer();
result();


// Jenny: Solve the homework by own 
function jennyHomeWork(callbacks){
    console.log(`Jenny started homework....`);
    console.log(`Jenny took sometime let's consider 2 hours...`);
    console.log(`Finally Jenny Completed homework....`);
    callbacks();
} 

// Elon: Copy homework from Jenny
let elonCopyHomeWork = function(){
    console.log(`Playing cricket `);
    console.log(`Copying homework.. `);
    console.log(`After 10 mins, Elon copied all homework.. `);
}
jennyHomeWork(elonCopyHomeWork);