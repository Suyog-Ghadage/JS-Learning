const bankSbi = {
    branchName : 'Pune',
    branchCode : 754733,
    accountType : 'saving',
    withDrawLimit : 100000,
    
}

const bankLocation = {
    street : 'gurudhwara Chowk',
    city : 'Akurdi',
    pinCode : 411035,


}


let sbiCloneAssign = Object.assign(bankSbi);
console.log(sbiCloneAssign);

let loactionCloneAssign = Object.assign(bankLocation);
console.log(loactionCloneAssign);

let sbiCloneSpread = {...bankSbi};
console.log(sbiCloneSpread);



const rateOfInterest = {
    homeLoneInterest : '8 perc',
    personalLoneInterest : '10 perc',
    deuInterest : '3 perc',

}

const sbiDetails = Object.assign(bankSbi,bankLocation,rateOfInterest);

console.log(`SBI Deatils Merge all : ${sbiDetails}`);

for (const key in sbiDetails) {
    if (sbiDetails.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`key:${key},Object : ${element}`);
        
    }
}