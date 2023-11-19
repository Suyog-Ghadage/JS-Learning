//class for vehical
class vehical {
    // Properties
    companyName
    vehicalColour
    chasisNumber
    topSpeed
    vehicalCc

    // Constructure

    constructor(companyName,vehicalColour,chasisNumber,topSpeed,vehicalCc){

        this.companyName = companyName;
        this.vehicalColour = vehicalColour;
        this.chasisNumber = chasisNumber;
        this.topSpeed = topSpeed;
        this.vehicalCc = vehicalCc;
    }
}

 //method

const vehicalAudi = new vehical ('Audi','white','1234567','300km/hr','4000');
console.log(vehicalAudi);
console.log(`Vehical Audi Details = ${vehicalAudi.companyName}  , ${vehicalAudi.vehicalColour} , ${vehicalAudi.chasisNumber}, ${vehicalAudi.topSpeed} , ${vehicalAudi.vehicalCc}`);
console.log(`==================================================`);
const vehicalferrari = new vehical('ferrari','red','098654','340km/hr','3990');
console.log(vehicalferrari);
console.log(`vehical Ferrari Deatils = ${vehicalferrari.companyName},${vehicalferrari.vehicalColour},${vehicalferrari.chasisNumber},${vehicalferrari.topSpeed},${vehicalferrari.vehicalCc}`);


console.log(`==================================================`);
const vehicalMercedes = new vehical('Mercedes','Black','56787654','250km/hr','2990');
console.log(vehicalMercedes);
console.log(`Vehical Mercedes Details = ${vehicalMercedes.companyName},${vehicalMercedes.vehicalColour},${vehicalMercedes.chasisNumber},${vehicalMercedes.topSpeed},${vehicalMercedes.vehicalCc}`);


console.log(`==================================================`);
const vehicalvolkswagen = new vehical('volkswagen','White','656558','150km/hr','1498');
console.log(vehicalvolkswagen);
console.log(` Vehical volkswagen Details = ${vehicalvolkswagen.companyName},${vehicalvolkswagen.vehicalColour},${vehicalvolkswagen.chasisNumber},${vehicalvolkswagen.topSpeed},${vehicalvolkswagen.vehicalCc}`);
console.log(`==================================================`);

const vehicalFord = new vehical('Ford','Black','212321','237km/hr','4951');
console.log(vehicalFord);
console.log(`Vehical Ford Details = ${vehicalFord.companyName},${vehicalFord.vehicalColour},${vehicalFord.chasisNumber},${vehicalFord.topSpeed},${vehicalFord.vehicalCc}`);

console.log(`==================================================`);

//class for collage
class collage{
    collageName
    departmentName
    div
    rollNum

    constructor(collageName,departmentName,div,rollNum){
        this.collageName = collageName;
        this.departmentName = departmentName;
        this.div = div;
        this.rollNum = rollNum;
    }
    
    // display(){
    //     console.log(this.collageName,this.departmentName,this.div,this.rollNum);
    // }

}
const collageDyp = new collage ('DYP','Production','B','21');
console.log(collageDyp);
console.log(`collage DYP Details = ${collageDyp.collageName}, ${collageDyp.departmentName}, ${collageDyp.div}, ${collageDyp.rollNum}`);

console.log(`==================================================`);

const collageSVERI = new collage ('SVERI','Mechanical','A','23');
console.log(collageSVERI);
console.log(`Collage SVERI Deatils = ${collageSVERI.collageName},${collageSVERI.departmentName},${collageSVERI.div},${collageSVERI.rollNum}`);

console.log(`==================================================`);

const collageAKJr = new collage ('A.K.Jr. collage of Science','PCM','D','30');
console.log(collageAKJr);
console.log(`Collage AKJr Details = ${collageAKJr.collageName},${collageAKJr.departmentName},${collageAKJr.div},${collageAKJr.rollNum}`);

console.log(`==================================================`);

const collageBhawani = new collage ('Shree Bhawani Vidyalaya Atpadi','Science','A','31');
console.log(collageBhawani);
console.log(`Collage Bhawani Deatils = ${collageBhawani.collageName},${collageBhawani.departmentName},${collageBhawani.div},${collageBhawani.rollNum}`);

console.log(`==================================================`);

function traverseObject(collObject){
    for (const key in collObject ) {
        console.log(`${key},${collObject}`);    
        }
}

traverseObject(vehicalAudi);
traverseObject(vehicalferrari);
traverseObject(vehicalMercedes);
traverseObject(vehicalvolkswagen);
traverseObject(vehicalFord);

console.log(`==================================================`);




