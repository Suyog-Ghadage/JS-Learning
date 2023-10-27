const array = [4,6,7,8,3,2];
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        console.log(`even Position Values = ${index}`);
        
    }
    
}

arrayNum = [8,7,6,5,4,3,2];
let sum = 0;
for (let index = 0; index < arrayNum.length-1; index++) {
    const element = arrayNum[index];
    sum = sum + element;
    console.log(sum);
    
}