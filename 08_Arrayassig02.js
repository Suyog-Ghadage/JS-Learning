 const arrayNumers = [20,31,40,25,23,11,29,9,60,2,11];
 const totalElement = arrayNumers.length;
 console.log(`Total Element Available in Array = ${totalElement}`);

for (const key in arrayNumers) {
    if (Object.hasOwnProperty.call(arrayNumers, key)) {
        const element = arrayNumers[key];
        console.log(`index = ${key} & Element =  ${element}`);
        
    }
}

console.log(`==============================================`);

console.log(`first element = ${arrayNumers[0] } & last Element = ${arrayNumers.slice(arrayNumers.length-1)}`);

console.log(`==============================================`);

console.log(`third last element = ${arrayNumers.slice(arrayNumers.length-3)}`);