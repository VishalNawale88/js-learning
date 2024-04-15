console.log ("======================= literals with at least 4 Properties ==============================")

let bankSbi = {
    Name: "Sbi Bank",
    Address: "Hadapsar",
    BankTimes: "10:00-AM - 4:00-PM",
    Branch: "Hadapsar-Branch",
}

console.log(bankSbi);
//console.table(bankSbi);


console.log ("======================= literals with at least 3 Properties ==============================")

let bankLocation = {
    City: "Pune",
    Street: "Fashion Street",
    Pin: "411028",
}

console.log(bankLocation);
//console.table(bankLocation);

console.log ("======================= Clone Step ==============================")

// Cloning an Object using Object.assign()
console.log(`===== Cloning an Object using Object.assign()======`);
const cloneObjet1 = Object.assign({}, bankSbi);
console.log(cloneObjet1);

// Cloning an Object using Object.assign()
console.log(`===== Cloning an Object using Object.assign()======`);
const cloneObjet2 = Object.assign({}, bankLocation);
console.log(cloneObjet2);

console.log ("======================= rate Of interest with 3 Properties ==============================")

let rateOfInterest = {
    HomeLoanInterest: "8.5%",
    PersonalLoanInterest: "12.5%",
    DueInterest: "20%",
}

console.log(rateOfInterest);
//console.table(rateOfInterest);

console.log ("======================= Merge Step ==============================")

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);

console.log ("======================= Traverse this merged object Step ==============================")

let Traverse = {
    Name: "Sbi Bank",
    Address: "Hadapsar",
    BankTimes: "10:00-AM - 4:00-PM",
    Branch: "Hadapsar-Branch",
    City: "Pune",
    Street: "Fashion Street",
    Pin: "411028",
    HomeLoanInterest: "8.5%",
    PersonalLoanInterest: "12.5%",
    DueInterest: "20%",
}

for (var key in Traverse) {
    if (Traverse.hasOwnProperty(key)) {
        console.log(key + " -> " + Traverse[key]);
    }
}