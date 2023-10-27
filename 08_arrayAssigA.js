 const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(`first element = ${arrayFruits[0]} & Last Element = ${arrayFruits[arrayFruits.length-1]}`);

 console.log(`========================================================`);

 arrayFruits.unshift("Papaya");
 console.log(`Add element at first =  ${arrayFruits}`);

 console.log(`========================================================`);

 arrayFruits.splice(3,1);
 console.log(`remove 3rd element Mango from array = ${arrayFruits}`);

 console.log(`========================================================`);

 arrayFruits.push("Pineapple");
 console.log(`Add pineapple at Last postion = ${arrayFruits}`);

 console.log(`========================================================`);

 arrayFruits.slice( 5, 0, "dragen Fruit");
 console.log(`add Dragen Fruit before water melon = ${arrayFruits} `);

 console.log(`========================================================`);

 arrayFruits.slice(2, 1, "Kiwi");
 console.log(arrayFruits);

 console.log(`========================================================`);

for (let index = 0; index < 4; index++) {
    const element = arrayFruits[index];
    console.log(element);
    
}


console.log(`========================================================`);

const lastThree = arrayFruits.length - 3 ;
const lastThreeElement = arrayFruits.slice(lastThree);
console.log(lastThreeElement);
