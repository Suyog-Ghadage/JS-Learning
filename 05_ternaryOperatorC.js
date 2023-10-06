function maleMarriageEligibility(gender , age , boyName){
    var result = gender == `male`  && age >= 21 
    ?`hey ${boyName} you are eligible for marriage , congrats!`
    :`hey ${boyName} you are not eligible for marriage`;
    return result;

}

var result = maleMarriageEligibility("male" , 25 , "billgates");
console.log(`${result}`);

var result = maleMarriageEligibility("male",17,"stew Jobs");
console.log(`${result}`);

console.log(`***************************************************************`);

function femaleMarriageEliibility(gender , age , girlname){
    var result = gender == `female` && age >=18
    ?`hey ${girlname} you are eligible for marriage `
    :`hey ${girlname} you are not eligible for Marriage`;
    return result;

}
var result = femaleMarriageEliibility("female", 16 ,"jenifer");
console.log(`${result}`);

var result = femaleMarriageEliibility("female", 27 ,"Malinda Gates");
console.log(`${result}`);