const personalDetails = {
    name :'suyog',
    bloodGroup : 'B+',
    height : '5.6 Feet',
}

const collageDetails = {
    collageName : 'Dr.D.Y.Patil Collage of engineering',
    department : 'Production Engineering',
    passOutYear : 2022,
}

const yourDeatil = Object.assign(personalDetails,collageDetails);
console.log(`assign personal Details and collage details : ${yourDeatil}`);

let friend = ["suyog","akash","rutik","omkar","swaraj"];
Object.freeze(friend);
console.log(friend);


for (const iterator of friend) {
    console.log(iterator);
}

let company = "Codemind Technology";
let result = "";
for (let index = company.length-1 ; index >= 0 ; index--) {
    let char = company.charAt(index);
    if (char ==" ") {
        break;
        
    } else {
        result = result + char ;
        
    }
    
    
}

console.log(`reverse of Technology : ${result}`);