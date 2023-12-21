class bank{
    bank_name
    location
    account_no
    ifsc
    intrest_rate
    constructor(bank_name,location,account_no,ifsc,intrest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc ;
        this.intrest_rate = intrest_rate;
    }
}

const axisBank = new bank('axis bank','akurdi',342432,'AXIS005',12);
console.log(axisBank);

const sbiBank = new bank('SBI Bank','pune',98766554,'SBIN001',11);
console.log(sbiBank);

const iciciBank = new bank('ICICI Bank','Kharadi',89766554,'ICICI002',13);
console.log(iciciBank);

const kotakBank = new bank('Kotak Bank','Talegaon',776665655,'KOTAK005',14);
console.log(kotakBank);

const hdfcBank = new bank('HDFC Bank','Tathawade',77665433334,'HDFC006',15);
console.log(hdfcBank);

const panjabBank = new bank('Panjab Bank','Dange Chowk',2324554,'PANJB21',10);
console.log(panjabBank);

