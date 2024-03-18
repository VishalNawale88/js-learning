console.log("===================== Assignment = 1 ==============================");

function voteEligible(age){
if (age==0 || age<=-0 || age>=130) {
    console.log(`Invalid data: ${age}`);
} else {
    if (age<18) {
        console.log(`Not Eligible For Vote: ${age}`);
    } else {
       if (age>=18) {
        console.log(`Eligible For Vote : ${age}`);
       } else {
          {
            console.log(`Valid data : ${age}`);;
          }
       } 
    }
}
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);