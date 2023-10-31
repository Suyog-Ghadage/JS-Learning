let bankSbi = {
    manager:"Akash",
    accountSection:"business , Saving , Current",
    bankTime: `9am to 4pm`,
    lunchBreak:`1pm to 2pm`,
}


let bankLocation={
    street:"Gurudhwara chowk",
    city:`Akurdi`,
    pin:411035,
}

const cloneBankSbi = Object.assign({},bankSbi)
console.log(cloneBankSbi);

console.log(`===============================================`);

const cloneBankLocation = Object.assign({},bankLocation)
console.log(cloneBankLocation);

console.log(`===============================================`);

let rateOfIntrest = {
    homeLoanInterest:10,
    personalLoanInterest:13,
    deuInterest:4,
}


console.log(`===============================================`);
console.log(`Merging bankSbi,BankLocation,rateOfIntrest`);

const sbiDetails =Object.assign({},bankSbi,bankLocation,rateOfIntrest);
console.log(sbiDetails);


console.log(`===============================================`);

console.log(`traverse Object sbi Details`);

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`element = ${element} & key = ${key}`);
        
    }
}