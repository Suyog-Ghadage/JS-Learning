



function Bank(bankName,city,pin){
    this.bankName;
    this.city;
    this.pin;
    this.show = function(){
        console.log(`bank Details = ${this.bankName},${this.city},${this.pin}`);
    }
}
const sbiBank = new Bank('SBI','Pune',112233);
console.log(sbiBank);
console.log(sbiBank.bankName,sbiBank.city,sbiBank.pin);

const axisBank = new Bank('Axis','Mumbai',445566);
console.log(axisBank);

const hdfcBank = new Bank('HDFC','Benguluru',889900);
console.log(hdfcBank);

Bank.prototype.country = 'Bharat';
console.log(axisBank.country);
console.log(hdfcBank);
console.log(hdfcBank.country);


axisBank.show();
sbiBank.show();

const array = [1,20,40,50];
console.log(array.length);
array.push(100);


