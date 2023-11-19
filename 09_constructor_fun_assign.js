
function  Bank (bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

const yesBank = new Bank('Yes Bank','Atpadi','YES0012','1234');
console.log(`Bank Details is : ${yesBank.bankName},${yesBank.location},${yesBank.ifscCode},${yesBank.branchCode}`);

const sbiBank = new Bank('SBI Bank','Atpadi','SBIN0012','1234');
console.log(`Bank Deatils is : ${sbiBank.bankName},${sbiBank.location},${sbiBank.ifscCode},${sbiBank.branchCode}`);

const mahBank = new Bank('MAH Bank','Atpadi','MAH0012','1234');
console.log(`Bank Details is : ${mahBank.bankName},${sbiBank.location},${sbiBank.ifscCode},${sbiBank.branchCode}`);

const axisBank = new Bank('AXIS Bank','Atpadi','AXIs0012','1234');
console.log(`Bank Deatails is : ${axisBank.bankName},${axisBank.location},${axisBank.ifscCode},${axisBank.bankName}`);


Bank.prototype.openTime = "9 AM IST";

Bank.prototype.closeTime = "6 PM IST";

console.log(`Open time of SBI Bank is : ${sbiBank.openTime},Close time is : ${sbiBank.closeTime}`);

console.log(` ${axisBank.bankName},close time = ${axisBank.closeTime}`);

console.log(`Name = ${yesBank.bankName},branchcode = ${yesBank.branchCode},open time = ${yesBank.openTime}`);